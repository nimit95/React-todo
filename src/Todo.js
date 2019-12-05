import React, {useContext, useState} from "react"
import TextField from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState'
import {Checkbox} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useToggleState from './hooks/useToggleState'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from "@material-ui/core/IconButton";
import {TodosContext} from "./context/todos.context";

function Todo(props) {
  let {todo} = props;
  let {dispatch} = useContext(TodosContext);
  let [isEditing, toggleState] = useToggleState();
  let [task, handleChange, reset] = useInputState(todo.task);

  console.log("rendering todo ", todo, task);
  let removeTodoWithId = () => {
    console.log("removing todo with id, ", todo)
    dispatch({type: "REMOVE", id: todo.id});
  };
  let todoRender = (
    !isEditing ?
      <p>{todo.task}</p> :
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("CALLING EDIT TODO", task);
          dispatch({type: "EDIT", id: todo.id, task: task});
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
    <ListItem key={todo.id} style={{height: "64px"}}>
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