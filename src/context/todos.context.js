import React, {createContext, useReducer} from "react";
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todos.reducer";


let initialTodo = [
  { id: 1234, task: "This is the first todo", completed: false },
  { id: 1235, task: "This is the second todo", completed: false }
];

export const TodosContext = createContext();

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodo);
  console.log("TOdostuff is ", TodosContext);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider;
