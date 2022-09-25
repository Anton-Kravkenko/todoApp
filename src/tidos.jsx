import React, { useEffect } from "react";
import { MdDeleteSweep, MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import TodoItems from "../src/TodoItems";
import "./App.css";

function Tidos() {
  const axios = require("axios");
  const [todos, setTodos] = React.useState([]);

  const [title, setTitle] = React.useState("");
  const [Search, setSearch] = React.useState("");
  const [HeaderText__value, setHeaderText] = React.useState("Список дел v1.5");

  useEffect(() => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      setTodos(JSON.parse(todos));
      console.log(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  async function FetchPost() {
    setHeaderText("You load todos from jsonplaceholder");
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(data);
  }

  const deleted = index => {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
  };

  const addTodo = () => {
    if (title === "") {
      console.log("write title in field");
    } else {
      setTodos(todos => [{ title }, ...todos]);
      setTitle("");
      console.log(todos);
    }
  };

  const DeleteAllTodos = () => {
    localStorage.removeItem("todos", JSON.stringify(todos));
    setTodos([]);
    setHeaderText("Список дел v1.5");
  };

  return (
    <div className="App">
      <div>
        <div className="first__Block__Wrapeer">
          <Link to="/timer">
            <MdTimer className="Go__to__timer__page" />
          </Link>
          <h1 onClick={FetchPost}>{HeaderText__value}</h1>
          <MdDeleteSweep
            className="trash__Delete__All_Todos"
            onClick={DeleteAllTodos}
          ></MdDeleteSweep>
        </div>
        <input
          className="Search__input"
          placeholder="Поиск"
          value={Search}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <div className="mapping__elements__container">
          {todos
            .filter(todos =>
              todos.title.toLowerCase().includes(Search.toLowerCase())
            )
            .map((todos, index) => (
              <TodoItems
                todos={todos}
                index={index}
                deleted={deleted}
                key={index}
              />
            ))}
        </div>

        <div className="input__Wrapper">
          <input
            placeholder="Напиши сюда задачу"
            onKeyPress={e => e.key === "Enter" && addTodo()}
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default Tidos;
