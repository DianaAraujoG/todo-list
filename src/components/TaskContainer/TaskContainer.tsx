import React, { useEffect, useState } from "react";
import { TaskCard } from "../TaskCard/TaskCard";
import type { TaskContainerProps } from "./TaskContainer.types";

export const TaskContainer: React.FC<TaskContainerProps> = ({ taskList }) => {
  const [filterList, setFilterList] = useState<TaskContainerProps["taskList"]>(
    []
  );
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    setFilterList(taskList);
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
    <main>
      <section>
        <input value={searchItem} onChange={handlerSearch} />
        <button onClick={handleClearSearch}>X</button>
      </section>
      <section>
        {!!filterList.length &&
          filterList.map((task, index) => (
            <TaskCard
              key={`${task.title}-${index}`}
              title={task.title}
              dateCreate={task.dateCreate}
              status={task.status}
              description={task.description}
            />
          ))}
      </section>
    </main>
  );
};
