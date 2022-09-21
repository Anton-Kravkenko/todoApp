import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import {MdBookmarkAdd} from 'react-icons/md';
import { MdDeleteSweep } from 'react-icons/md';
import { MdTimer } from 'react-icons/md';
import {Navigate, Link} from "react-router-dom";
import TodoItems from './TodoItems';
import './App.css';
function tidos() {
    const axios = require('axios');
    const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [mark, setMark] = React.useState(JSON.parse(localStorage.getItem('mark')) || [])
    const [title, settitle] = React.useState("");
    const [Search, setSearch] = React.useState("");
    const [HeaderText__value, setHeaderText] = React.useState("Список дел 1.2")
    async function FetchPost() {
      setHeaderText("You load todos from jsonplaceholder");
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setTodos(data)
    }      

    // const MarkingElement = index => {
    //     const copyMark = [...mark]
    //     const copy = [...todos]
    //     copyMark.push(index)
    //    copy.splice(index, 1);
    //    setTodos(copy);
    //    setMark(copyMark);
    //     return <Navigate replace to="/home" />
    //   }
      localStorage.setItem('todos', JSON.stringify(todos));
    
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
        setTodos([
          {title}, ...todos, ])
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
        <Link to="/timer"><MdTimer   className='Go__to__timer__page'/></Link>
         <h1 onClick={FetchPost}>{HeaderText__value}</h1>
          <MdDeleteSweep 
          className='trash__Delete__All_Todos'
           onClick={DeleteAllTodos}></MdDeleteSweep>
         </div>
          <input
           className="Search__input" 
           placeholder='Поиск' value={Search} 
           onChange={e => setSearch(e.target.value.toLowerCase())}></input>
        <div className="mapping__elements__container">
      
        {  todos.filter(todos => todos.title.toLowerCase().includes(Search)).map((todo1, index) => ( 
  <TodoItems todo1={todo1} index={index} deleted={deleted}/>
  ))}
        </div>
    
    <div className='input__Wrapper'>
    <input placeholder='Напиши сюда задачу' onKeyPress={(e) => e.key === 'Enter' && addTodo()} value={title} onChange={e => settitle(e.target.value)} ></input>
    
    </div>
     </div>
    
     </body>
      )
}

export default tidos;
// export const [mark, setMark] = React.useState(JSON.parse(localStorage.getItem('mark')) || []);


