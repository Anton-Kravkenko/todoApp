import './App.css';
import React from 'react';

function Timer() {
   const [timer,setTimer] = React.useState({ms: 0, s: 0, m: 0, h: 0});
  
   const startTtimer = () => {
   }
    return (
        <body className="Timer">
        <h1>Timer</h1>
        <button onClick={startTtimer()}>
        Start
        </button>
       </body>    ) }


export default Timer;