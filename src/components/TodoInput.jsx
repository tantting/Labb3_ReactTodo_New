import { List, ListItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");
  const changeHandler = (evt) => {
    setInput(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <ListItem id="inputListItem">
        <TextField
          id="inputField"
          label="Add todo!"
          variant="outlined"
          onChange={changeHandler}
          value={input}
        />
      </ListItem>
    </form>
  );
}

export default TodoInput;
