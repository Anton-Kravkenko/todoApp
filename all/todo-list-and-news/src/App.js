import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const todo = [{
    id: 1,
    name: "NEWS",
    iscomplete: false,
  },
  {
    id: 2,
    name: "sdasdaNEWS",
    iscomplete: false,
  },
  {
    id: 3,
    name: "NEWdsdsadsaS",
    iscomplete: false,
  },
  {
    id: 4,
    name: "adsdsa",
    iscomplete: false,
  },
  {
    id: 5,
    name: "asdads",
    iscomplete: false,
  },
];
const addNEwsTodo = () => {
  todo.push({
    id: 5,
    name: ImputsValues,
    iscomplete: false,
  })
}

const [ImputsValues, SetImputsValues] = React.useState("");

console.log(ImputsValues);
  return (
    <div className="App">
      <header className="App-header">
      <span style="font-family: Mulish; font-size: 14px; font-style: normal; font-weight: 400;" class="">G</span>><a href="https://kirchenwirt-in-andorf.at/impressum/" target="_blank" rel="noopener">Impressum</a> - </span><a href="https://kirchenwirt-in-andorf.at/privacy-policy/" target="_blank" rel="noopener">Datenschutzerklärung</a>

Copyright © 2022 Kirchenwirt Andorf<a href="https://themeforest.net/user/webgeniuslab"><span style="text-decoration: underline;"><span style="text-decoration: underline;"></span></span></a>. All Rights Reserved.



   {todo.map(todo => <div>
   <p>{todo.id} {todo.name}</p></div>)}
   <form >
    <input value={ImputsValues} onChange={e => SetImputsValues(e.target.value)} ></input>
   </form>
      </header>
    </div>
  );
}

export default App;
