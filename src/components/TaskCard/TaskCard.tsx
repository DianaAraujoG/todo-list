import React from "react";
import type { TaskCardProps } from "./TaskCard.types";

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dateCreate,
  status,
  description,
}) => {
  return (
    <div className=" bg-blue-500 p-8 my-8">
      <h2 className="text-orange-300">{title}</h2>
      <h3>{dateCreate}</h3>
      <p>{description}</p>
      <p>{status}</p>
    </div>
  );
};
