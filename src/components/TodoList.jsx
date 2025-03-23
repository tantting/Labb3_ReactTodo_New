import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const initialTodos = [
  { id: 1, text: "dfdfdf", done: false },
  { id: 2, text: "ja", done: false },
  { id: 3, text: "nej", done: true },
  { id: 4, text: "ok", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (input) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: 5, text: input, done: false }];
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
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodo={() => deleteTodo(todo.id)}
          toggleDone={() => toggleDone(todo.id)}
        />
      ))}
      <TodoInput addTodo={addTodo} />
    </List>
  );
}

export default TodoList;
