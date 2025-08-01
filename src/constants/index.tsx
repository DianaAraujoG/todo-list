import type { ButtonLabels, StatusValues } from "../types/Task.types";

export const BUTTONS_LABELS: ButtonLabels[] = [
  {
    value: "pending",
    text: "Pendiente",
    color: "#d2ceff",
  },
  {
    value: "inProgress",
    text: "En progreso",
    color: "#d1e5F7",
  },
  {
    value: "completed",
    text: "Completado",
    color: "#daf2d6",
  },
];

export const STATUS_VALUES: StatusValues = {
  pending: {
    text: "Pendiente",
    color: "#d2ceff",
  },
  inProgress: {
    text: "En progreso",
    color: "#d1e5F7",
  },
  completed: {
    text: "Completado",
    color: "#daf2d6",
  },
};
