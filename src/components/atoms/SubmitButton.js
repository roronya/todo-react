import React from "react";

export default ({ children, onClick }) => (
  <button type="submit" onClick={onClick}>
    {children}
  </button>
);
