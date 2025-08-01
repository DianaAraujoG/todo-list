import React, { useEffect, useRef, useState } from "react";
import type { TaskCardProps } from "./TaskCard.types";
import { STATUS_VALUES } from "../../constants";

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
}) => {
  const { title, deliveryDate, status, description } = task;
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" bg-[#fff9de] rounded-lg p-6 my-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <div className="relative inline-block" ref={menuRef}>
          <button
            type="button"
            onClick={toggleDropdown}
            className="hover:ring-2 focus:ring-2 focus:outline-none text-gray-600  font-lg rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-sm z-10">
              <ul className="py-2 text-sm text-gray-700">
                <li
                  onClick={() => {
                    onEdit(task);
                    toggleDropdown();
                  }}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Editar
                  </a>
                </li>
                <li
                  onClick={() => {
                    onDelete(task);
                    toggleDropdown();
                  }}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Eliminar
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-500">Fecha de entrega: {deliveryDate}</p>
      <p className="py-4">{description}</p>
      <div className="flex justify-between items-center">
        <p
          className="p-2 rounded-lg w-fit"
          style={{ backgroundColor: STATUS_VALUES[status].color }}
        >
          {STATUS_VALUES[status].text}
        </p>
        <p className="text-sm text-gray-500">
          Fecha de entrega: {deliveryDate}
        </p>
      </div>
    </div>
  );
};
