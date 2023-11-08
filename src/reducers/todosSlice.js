import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
};

// wrapper functiuon which create action creators, action types and reducers in one call
const todosSlice = createSlice({
  // this helps create the action type
  name: "todosSlice",
  initialState: INITIAL_STATE,
  reducers: {
    // the object that we create here are actually action creators
    // every key we pass into reducers becomes an action creators
    // that we can destructure from the slice.actions properties
    addTodo: (state, action) => {
      // in redux tool kit we break the rules of redux,
      // which is we are not supposed to modify state directly, instead return the copy of old state with new state
      // we directly modify state using redux toolkit, which gives us that features in rtk
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      // Find and remove the todo with the specified id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        Object.assign(todoToUpdate, updatedTodo);
      }
    },
  },
});

// destructure add todo from todosSlice
export const {
   addTodo,  //action creator
   deleteTodo,
   updateTodo
} = todosSlice.actions;
// destructure todosReducer from todosSlice
export const todosReducer = todosSlice.reducer;
