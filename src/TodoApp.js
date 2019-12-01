import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, TableSortLabel } from '@material-ui/core'
import TodoList from './TodoList'
import TodoForm from "./TodoForm";
import Grid from '@material-ui/core/Grid'
import useTodoState from './hooks/useTodoState'

function TodoApp() {

  let { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState()
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography>Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item lg={4} sm={11} md={8}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;

// 1. TodoApp 
  // a. AddTodo
  // b. TodoItem

// TodoItem - { id, task, completed }
