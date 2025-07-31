import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <h1>TODO</h1>
      <button>+</button>
    </header>
  );
};
