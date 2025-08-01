import type { TaskAtributes, TaskStatus } from "../../types/Task.types";
import type { TaskContainerProps } from "../TaskContainer/TaskContainer.types";

export type TextStatus = {
  [key in TaskStatus]: string;
};

export interface TaskCardProps {
  task: TaskAtributes;
  onEdit: TaskContainerProps["onEdit"];
  onDelete: TaskContainerProps["onDelete"];
}
