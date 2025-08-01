import React, { useEffect, useState } from "react";
import { TaskCard } from "../TaskCard/TaskCard";
import type { TaskContainerProps } from "./TaskContainer.types";

export const TaskContainer: React.FC<TaskContainerProps> = ({
  taskList,
  onEdit,
  onDelete,
}) => {
  const [filterList, setFilterList] = useState<TaskContainerProps["taskList"]>(
    []
  );
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    setFilterList(taskList);
    setSearchItem("");
  }, [taskList]);

  const handlerSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchItem(value);
    let searchList = taskList;
    if (value.length) {
      const parseSearch = value.toLowerCase();

      searchList = taskList.filter(
        (task) =>
          task.title.toLowerCase().includes(parseSearch) ||
          task.description.toLowerCase().includes(parseSearch)
      );
    }

    setFilterList(searchList);
  };

  const handleClearSearch = (): void => {
    setFilterList(taskList);
    setSearchItem("");
  };

  return (
    <main className="w-full px-4">
      <section>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchItem}
            onChange={handlerSearch}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mb-4"
            placeholder="Buscar tareas..."
          />
          <button
            type="button"
            title="Limpiar búsqueda"
            onClick={handleClearSearch}
            className="absolute end-2.5 bottom-2.5 text-gray-700 bg-white-700 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="grid grid-flow-col md:grid-cols-3  gap-4">
        {!!filterList.length &&
          filterList.map((task, index) => (
            <TaskCard
              key={`${task.title}-${index}`}
              onEdit={onEdit}
              onDelete={onDelete}
              task={task}
            />
          ))}
      </section>
    </main>
  );
};
