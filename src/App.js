/* eslint-disable */
import "./App.css";
import IconGen from "./components/IconGen";
import Quote from "./components/Quote";
import ThemeBtn from "./components/ThemeBtn";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { myContext } from "./context";

/**
 * Represents the main component of the application.
 * 
 */
function App() {
  const { fechdata, isDark } = useContext(myContext);
    
  useEffect(function Dirhja() { 
    fechdata();
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: isDark === false ? "white" : "#111827",
      }}
    >
      <div className="body">
        <ThemeBtn />
        <Quote />
        <IconGen />
      </div>
    </div>
  );
}

export default App;
