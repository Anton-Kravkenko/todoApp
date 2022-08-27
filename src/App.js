import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const data = []

  const [todos, setTodos] = React.useState(data)
  const [titles, settitle] = React.useState("");
  const [bodys, setbodys] = React.useState("");

  const addTodo = () => {
		setTodos(todo1 => [
			{
				titles,
				bodys,
			},
			...todo1,   
		])
   settitle("")
   setbodys("")
 
	}


  return (
    <div className="App">
   
    <h1>First Project - TodoApp</h1>
  
  {  todos.map(todo1 => <div className='mapingdivs'>

 <p> {todo1.titles}</p>
 <p> {todo1.bodys}</p>
 
  </div>)}

    <input placeholder='titles' value={titles} onChange={e => settitle(e.target.value)} ></input>
    <input placeholder='body' value={bodys} onChange={e => setbodys(e.target.value)} ></input>
    <button onClick={addTodo}>добавить</button>
    </div>
  );  
}

export default App;