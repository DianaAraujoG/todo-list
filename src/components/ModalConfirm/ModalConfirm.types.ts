import type { TaskAtributes } from "../../types/Task.types";

export interface ModalConfirmProps {
  titleNote: TaskAtributes["title"];
  onCancel: () => void;
  onConfirm: () => void;
}
