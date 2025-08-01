import type { TaskAtributes } from "../../types/Task.types";

export type actionsModal = "create" | "edit";

export interface ModalTaskProps {
  taskInfo?: TaskAtributes;
  action: actionsModal;
  onSend: (data: TaskAtributes) => void;
  onClose: () => void;
}
