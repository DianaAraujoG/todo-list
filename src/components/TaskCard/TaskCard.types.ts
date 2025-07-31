export type TaskStatus = "pending" | "inProgress" | "completed";

export type TextStatus = {
  [key in TaskStatus]: string;
};

export interface TaskCardProps {
  title: string;
  dateCreate: string;
  status: TaskStatus;
  description: string;
}
