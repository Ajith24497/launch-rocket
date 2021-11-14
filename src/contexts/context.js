import React, { useReducer } from "react";
import App from "../App";

export const Context = React.createContext();
const intialState = [{ animProgress: 0, isPlay: false }];
const reducer = (state, action) => {
  switch (action.type) {
    case "animprogress":
      return [...state, (state[0].animProgress = action.payload)];

    case "playstate":
      return [...state, (state[0].isPlay = action.payload)];

    default:
      throw new Error("Please Select Correct value");
  }
};

export function ContextProvider() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateAnimProgress = (progress) => {
    dispatch({ type: "animprogress", payload: progress });
  };

  const updatePlayState = (playstate) => {
    dispatch({ type: "playstate", payload: playstate });
  };

  return (
    <Context.Provider value={{ ...state, updateAnimProgress, updatePlayState }}>
      <App />
    </Context.Provider>
  );
}
