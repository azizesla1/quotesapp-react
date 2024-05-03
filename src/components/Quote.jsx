import React from "react";
import { useContext } from 'react'
import { myContext } from '../context'

export default function Quote() {
  const { quote, isDark } = useContext(myContext)
  return (
    <div className="containerquotes">
      <div
        className="quotesform"
        style={{
          backgroundColor: isDark === false ? "#e5e7eb" : "#1F2937",
          color: isDark === false ? "black" : "#F3F4F6",
        }}
      >
        <div className="quotes">
          <h3>
            {quote.content}

          </h3>
          <p>
            {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
}
