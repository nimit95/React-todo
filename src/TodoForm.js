import React, { useState } from "react"
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import useInputState from './hooks/useInputState'

function TodoForm(props) {
  let { addTodo } = props;
  
  let [task, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin:"1rem 0", padding:"0 0.5rem"}}>
      <form 
        onSubmit = {(e) => {
          e.preventDefault();
          addTodo(task);
          reset()
        }}
      >
        <TextField 
          onChange={handleChange} 
          value={task} 
          fullWidth 
          margin="normal"
          label="Add new todo"
        />
      </form>
    </Paper>
  );
}

export default TodoForm;