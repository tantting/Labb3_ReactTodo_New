import { useState } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <h1>Todos</h1>
        <TodoList />
      </main>
    </>
  );
}

export default App;
