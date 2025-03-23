import { useState } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
