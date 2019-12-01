import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { Toolbar, Typography } from '@material-ui/core'
import Todo from './Todo'

function TodoList(props) {

  let { todos, editTodo, removeTodo } = props;
  if (todos.length > 0) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  todo={todo}
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                />
                {!!(todos.length - i - 1) && <Divider />}
              </>
            )
          })}
        </List>
      </Paper>
    )
  }
  else return null;
}

export default TodoList;