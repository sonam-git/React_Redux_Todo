import { useState } from "react";
import {  useSelector } from "react-redux";

export const useTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
//   const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState("yes");

  const {todos} = useSelector((state) => state.todos);
  console.log(todos);

  return {
    todos,
    todoInput,
    setTodoInput,
    authorInput,
    setAuthorInput,
    isCompleted,
    setIsCompleted,
  };
};

export default useTodo;
