import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer
});


// action types
// const ALTERCATION = "ALTERCATION";

// const altercation = (numInvolved) => {
//   return {
//     type: ALTERCATION,
//     payload: numInvolved,
//   };
// };

// const INITIAL_STATE = {
//   numStaff: 99,
//   numCars: 50,
//   nightShift: false,
// };

// const sarahReducer = (state = INITIAL_STATE, action) => {
//   console.log("hit SarahReducer");
//   switch (action.type) {
//     case ALTERCATION:
//       return {
//         ...state,
//         numStaff: state.numStaff - action.payload * 2,
//         numCars: state.numCars - action.payload * 1,
//       };
//     default:
//       return state;
//   }
// };

// const samReducer = (state = INITIAL_STATE, action) => {
//   console.log("hit SamReducer");
//   switch (action.type) {
//     case ALTERCATION:
//       return {
//         ...state,
//         numStaff: state.numStaff - action.payload * 5,
//         numCars: state.numCars - action.payload * 2,
//       };
//     default:
//       return state;
//   }
// };

// const sunReducer = (state = INITIAL_STATE, action) => {
//   console.log("hit SunReducer");
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   paramedics: sarahReducer,
//   firefighter: samReducer,
//   police: sunReducer,
// });

// const store = createStore(rootReducer);
// console.log("State before dispatch", store.getState());

// store.dispatch(altercation(2));
// console.log("State after dispatch", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
