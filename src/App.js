import { useEffect } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { FaTrashAlt } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import React from 'react';
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAk1rZbPAifRK-etQdKossW8l_aljJp3Zo",
    authDomain: "todo-app-c51aa.firebaseapp.com",
    projectId: "todo-app-c51aa",
    storageBucket: "todo-app-c51aa.appspot.com",
    messagingSenderId: "868228809297",
    appId: "1:868228809297:web:b2a242c227a03bf2b12e70",
    measurementId: "G-6R8STXHX8D"
  };
  const app = initializeApp(firebaseConfig);


  const axios = require('axios');
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [title, settitle] = React.useState("");
  const [Search, setSearch] = React.useState("");
  const [Isloading, setLoading] = React.useState(false);
  const [HeaderText__value, setHeaderText] = React.useState("Список дел")
  async function FetchPost() {
    setHeaderText("You load todos from jsonplaceholder");
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
  setTodos(data)
  }
          
    const deleted = index => {
      const copy = [...todos]
     copy.splice(index, 1);
     setTodos(copy);
   
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  const addTodo = () => {
    if(title === '') {
     console.log("write title in field")
    } else {
      
      setTodos(todos => [
        {
          title,
        },
        ...todos,   
      ])
     settitle("")
   
    }
	}
  localStorage.setItem('todos', JSON.stringify(todos));
  const DeleteAllTodos = () => {
    localStorage.removeItem('todos', JSON.stringify(todos));
    setTodos([])}

  return (
    <body className="App">
      <div>
     <div className='first__Block__Wrapeer'>
     <h1 onClick={FetchPost}>{HeaderText__value}</h1>
      <MdDeleteSweep className='trash__Delete__All_Todos' onClick={DeleteAllTodos}></MdDeleteSweep>
     </div>
      <input className="Search__input" placeholder='Поиск' value={Search} onChange={e => setSearch(e.target.value.toLowerCase())}></input>
    <div className="mapping__elements__container">
  
    {  todos.filter(todos => todos.title.toLowerCase().includes(Search)).map((todo1, index) => ( 
<div className='mapingdivs' key={index}>
<div className='widthBLOCK'>
 <p className='m5' > {todo1.title}</p>
</div>
 <FaTrashAlt className='trash__deleteitems' onClick={() => deleted(index)}></FaTrashAlt>
  </div>))}
    </div>

<div className='input__Wrapper'>
<input placeholder='Напиши сюда задачу' onKeyPress={(e) => e.key === 'Enter' && addTodo()} value={title} onChange={e => settitle(e.target.value)} ></input>

</div>
 </div> 

 </body> ); }

export default App;