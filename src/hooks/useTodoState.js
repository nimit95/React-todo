
import uuid from 'uuid'
import { useEffect, useState } from 'react'
import useLocalStorageState from "./useLocalStorageState";

function useTodoState() {
  let initialTodo = JSON.parse(window.localStorage.getItem('todos') || "[]")
  // let initialTodo = [
  //   { id: 1234, task: "This is the first todo", completed: false },
  //   { id: 1235, task: "This is the second todo", completed: false}
  // ];
  let [todos, setTodos] = useLocalStorageState("todos", initialTodo);

  let addTodo = (task) => {
    let newTodos = [...todos, { id: uuid(), task: task, completed: false }];
    setTodos(newTodos);
  }
  let editTodo = (id, task) => {
    console.log("COMING IN EDIT ", todos);
    let newTodos = todos.map(todo => {
      return todo.id == id ? { ...todo, task: task } : todo;
    })
    console.log("SETTING NEW ", newTodos);
    setTodos(newTodos);
  }
  let removeTodo = (id) => {
    let newTodos = todos.filter(todo => {
      return todo.id != id
    })
    console.log("Removed todos are", newTodos);
    setTodos(newTodos);
  }
  let toggleTodo = (id) => {
    let newTodos = todos.map(todo => {
      return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
    })
    setTodos(newTodos);
  }
  return {
    todos,
    addTodo,
    editTodo,
    removeTodo,
    toggleTodo
  }
}
export default useTodoState;