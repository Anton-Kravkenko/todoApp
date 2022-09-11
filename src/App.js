import { useEffect } from 'react';
import './App.css';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const axios = require('axios');
  const [todos, setTodos] = React.useState([])
  const [title, settitle] = React.useState("");
  const [Isloading, setLoading] = React.useState(false);
  const [HeaderText__value, setHeaderText] = React.useState("TodoApp in react")

  async function FetchPost() {
    setHeaderText("You load todos from jsonplaceholder");
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
  setTodos(data)
  
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>   {
      setLoading(false)
    }, 2000);
  }, []);
            
    const deleted = index => {
      const copy = [...todos]
     copy.splice(index, 1);
 
     setTodos(copy)
   
      
    }

  const addTodo = () => {
    if(title === '') {
     console.log("write title n field")
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


  return (
    <body className="App">
   { Isloading ? (

    <ClimbingBoxLoader
  height="300"
  className='loader'
  width="300"
  radius="100"
  color="white"

/>
   

     ) : (
      <div>
      <h1 onClick={FetchPost}>{HeaderText__value}</h1>
    <div className="mapping__elements__container">
    {  todos.map((todo1, index) => ( 
<div className='mapingdivs' key={index}>
<div className='widthBLOCK'>
 <p className='m5' > {todo1.title}</p>
</div>
 <FaTrashAlt className='trash__deleteitems' onClick={() => deleted(index)}></FaTrashAlt>
  </div>))}
    </div>

<div className='input__Wrapper'>
<input placeholder='Write you todo here' onKeyPress={(e) => e.key === 'Enter' && addTodo()} value={title} onChange={e => settitle(e.target.value)} ></input>
</div>
 </div> 
 )}
 </body> ); }

export default App;