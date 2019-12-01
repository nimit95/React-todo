import React, { useState } from "react"
import TextField from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState'
import { Checkbox } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useToggleState from './hooks/useToggleState'
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from "@material-ui/core/IconButton";

function Todo(props) {
  let { todo, editTodo, removeTodo } = props;
  let [isEditing, toggleState] = useToggleState();
  let [task, handleChange, reset] = useInputState(todo.task);
  
  console.log("rendering todo ", todo, task);
  let removeTodoWithId = () => {
    console.log("removing todo with id, ", todo)
    removeTodo(todo.id);
  } 
  let todoRender = (
    !isEditing ? 
      <p>{todo.task}</p>: 
      <form 
        onSubmit = {(e) => {
            e.preventDefault();
            console.log("CALLING EDIT TODO");
            editTodo(todo.id, task);
            toggleState()
          }}
      >
        <TextField 
          onChange={handleChange} 
          value={task} 
          fullWidth 
          autoFocus
        />
      </form>
  );
  return (
    <ListItem key={todo.id} style={{ height:"64px" }}>
      <Checkbox checked={todo.completed} tabIndex={-1}/>
      <ListItemText>
        {todoRender}
      </ListItemText>
      <IconButton onClick={removeTodoWithId}>
        <DeleteIcon/>
      </IconButton>
      <IconButton onClick={toggleState}>
        <EditIcon/>
      </IconButton>
    </ListItem>
  )
}


export default Todo;