import { useEffect } from 'react';
import './App.css';
import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const [todos, setTodos] = React.useState([])
  const [titles, settitle] = React.useState("");
  const [bodys, setbodys] = React.useState("");
  const [Isloading, setLoading] = React.useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);
            
    const deleted = id => setTodos([...todos].filter(t => t.id !== id));
  const addTodo = () => {
		setTodos(todos => [
			{
				titles,
				bodys,
			},
			...todos,   
		])
   settitle("")
   setbodys("")
 
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
      <h1>First Project - TodoApp</h1>
       {  todos.map(todo1 => 
<div className='mapingdivs'>
<div className='widthBLOCK'>
<p> {todo1.titles}</p>
 <p> {todo1.bodys}</p>
</div>

 <button className='delete' onClick={deleted}>Удалить</button>
 
  </div>)}

<div className='addTodoFild'>
<input placeholder='titles' value={titles} onChange={e => settitle(e.target.value)} ></input>
<input placeholder='body' value={bodys} onChange={e => setbodys(e.target.value)} ></input>
<button onClick={addTodo}>добавить</button>
</div>
 </body> )}
 </div> ); }

export default App;