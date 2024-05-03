import React from "react";
import { useContext } from "react";
import { myContext } from "../context";

export default function ThemeBtn() {
  const { isDark, setDark } = useContext(myContext);
  function handclick() {
    setDark(!isDark);
  }
  return (
    <div className="btn-dark">
      <div
        className="backbtn"
        onClick={handclick}
        style={{
          backgroundColor: isDark ? "black" : "",
          justifyContent: isDark ? "flex-end" : "flex-start",
        }}
      >
        <div className="cerclebtn">
          <button></button>
        </div>
      </div>
    </div>
  );
}
