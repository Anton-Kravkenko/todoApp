import { useEffect } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const axios = require('axios');

  const [todos, setTodos] = React.useState([])
  const [title, settitle] = React.useState("");
  const [body, setbodys] = React.useState("");
  const [Isloading, setLoading] = React.useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);
            
    const deleted = index => {
      const copy = [...todos]
     copy.splice(index, 1);
     console.log(copy)
     setTodos(copy)
   
      
    }
  const addTodo = () => {
		setTodos(todos => [
			{
				title,
				body,
			},
			...todos,   
		])
   settitle("")
   setbodys("")

 
	}

async function FetchPost() {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
  setTodos(data)
 

 }
  return (
    <div className="App">
   { Isloading ? (

    <body>
    <ClimbingBoxLoader
  height="300"
  className='loader'
  width="300"
  radius="100"
  color="white"

/>
    </body>

     ) : (
      <body>
      <h1 onClick={FetchPost}>First Project - TodoApp</h1>
       {  todos.map((todo1, index) => ( 
<div className='mapingdivs'>
<div className='widthBLOCK'>

 <p className='m5'> {todo1.title}</p>
 <p className='bodys'> {todo1.body}</p>
 

</div>

 <button className='delete' onClick={() => deleted(index)}>Удалить</button>
 
  </div>))}

<div className='addTodoFild'>
<input placeholder='titles' value={title} onChange={e => settitle(e.target.value)} ></input>
<input placeholder='body' value={body} onChange={e => setbodys(e.target.value)} ></input>
<button onClick={addTodo}>добавить</button>
</div>
 </body> )}
 </div> ); }

export default App;