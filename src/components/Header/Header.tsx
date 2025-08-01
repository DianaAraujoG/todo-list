import React from "react";
import type { HeaderProps } from "./Header.types";

export const Header: React.FC<HeaderProps> = ({ onCreate }) => {
  return (
    <header className="flex justify-between items-center p-8">
      <h1 className="font-bold text-3xl">TODO</h1>
      <button
        type="button"
        title="Crear nota"
        onClick={onCreate}
        className="text-gray-700 hover:ring-2  focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </header>
  );
};
