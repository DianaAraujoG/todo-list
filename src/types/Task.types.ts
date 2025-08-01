export type TaskStatus = "pending" | "inProgress" | "completed";

export interface TaskAtributes {
  id?: string;
  title: string;
  dateCreate: string;
  deliveryDate: string;
  status: TaskStatus;
  description: string;
}

export interface ButtonLabels {
  value: TaskStatus;
  text: string;
  color: string;
}

export type StatusValues = {
  [key in TaskStatus]: { text: string; color: string };
};
