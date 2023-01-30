import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { Component2 } from "./Component2";

export const UserContext = createContext("");

export function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  const handlerClick = () => {
    setUser("Liza Romanova");
  };

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <button type='button' onClick={handlerClick}>
        Click Me!
      </button>
      <Component2 />
    </UserContext.Provider>
  );
}
