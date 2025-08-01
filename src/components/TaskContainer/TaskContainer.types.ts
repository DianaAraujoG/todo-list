import type { TaskAtributes } from "../../types/Task.types";

export interface TaskContainerProps {
  taskList: TaskAtributes[];
  onEdit: (task: TaskAtributes) => void;
  onDelete: (task: TaskAtributes) => void;
}
