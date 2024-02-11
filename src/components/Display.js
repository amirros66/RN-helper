import React from "react";

export default function Display({ input }) {
  return <input type="text" className="display" value={input} readOnly />;
}
