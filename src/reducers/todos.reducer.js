
import uuid from 'uuid'
import { useEffect, useState } from 'react'
import useLocalStorageState from "../hooks/useLocalStorageState";


let reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            console.log("reducer gets ", action.id);
            return state.filter(todo => {
                return todo.id !== action.id
            });
        case "EDIT":
            console.log("TO edit", state, action);
            let editedTodo = state.map(todo => {
                return todo.id === action.id ? { ...todo, task: action.task } : todo;
            });
            console.log("edited todos are", editedTodo);
            return editedTodo;
        case "TOGGLE":
            return state.map(todo => {
                return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
            });
        default:
            return state;
    }
};
 export default reducer;