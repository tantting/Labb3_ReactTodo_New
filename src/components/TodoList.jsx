import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "./TodoList.css";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  return data || [];
};

function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (input) => {
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        { id: crypto.randomUUID(), text: input, done: false },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleDone = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <List
      id="TodoList"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {todos.map((todo) => (
        <TodoItem
          id="TodoItem"
          todo={todo}
          key={todo.id}
          deleteTodo={() => deleteTodo(todo.id)}
          toggleDone={() => toggleDone(todo.id)}
        />
      ))}
      <TodoInput addTodo={addTodo} id="TodoInput" />
    </List>
  );
}

export default TodoList;
