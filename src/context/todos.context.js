import React, {createContext } from "react";
import useTodoState from "../hooks/useTodoState";


let initialTodo = [
  { id: 1234, task: "This is the first todo", completed: false },
  { id: 1235, task: "This is the second todo", completed: false }
];

export const TodosContext = createContext();

function TodosProvider(props) {
  const todosStuff = useTodoState(initialTodo);
  console.log("TOdostuff is ", TodosContext);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider;
