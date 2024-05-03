/*eslint-disable*/
import { createContext, useState } from "react";
const myContext = createContext();
const ContextProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);
  const [quote, setQuote] = useState({});

  async function fechdata() {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    setQuote(data[0]);
  }
  return (
    <myContext.Provider value={{ isDark, setDark, quote, fechdata }}>
      {children}
    </myContext.Provider>
  );
};
export { myContext, ContextProvider };
