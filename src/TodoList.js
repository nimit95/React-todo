import React, { useState, useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { Toolbar, Typography } from '@material-ui/core'
import Todo from './Todo'
import { TodosContext } from "./context/todos.context";

function TodoList(props) {

  let { todos } = useContext(TodosContext);
  console.log("todos are " + todos)
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => {
            console.log("rendering todo", todo)
            return (
              <React.Fragment key={todo.id}>
                <Todo
                  todo={todo}
                />
                {!!(todos.length - i - 1) && <Divider />}
              </React.Fragment>
            )
          })}
        </List>
      </Paper>
    )
  }
  else return null;
}

export default TodoList;