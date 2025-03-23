import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo, deleteTodo, toggleDone }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const styles = {
    textDecoration: todo.done === true ? "line-through" : "none",
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="delete" onClick={deleteTodo}>
            <DeleteIcon />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleDone}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} style={styles} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
