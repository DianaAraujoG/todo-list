import type { TaskStatus } from "../../types/Task.types";

export type SelectStatus = TaskStatus | "all";

export interface SidebarProps {
  statusSelect: SelectStatus;
  onSelectStatus: (status: SelectStatus) => void;
}
