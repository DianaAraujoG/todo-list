import React from "react";
import type { ButtonLabels } from "../../types/Task.types";
import type { SidebarProps } from "./Sidebar.types";
import { BUTTONS_LABELS } from "../../constants";

export const Sidebar: React.FC<SidebarProps> = ({
  onSelectStatus,
  statusSelect,
}) => {
  const renderButtonStatus = (item: ButtonLabels) => (
    <button
      type="button"
      key={item.value}
      onClick={() => {
        onSelectStatus(item.value);
      }}
      className={`flex-1 flex items-center bg-gray-100/50 hover:bg-gray-200/50 text-sm text-gray-700 rounded-lg px-4 py-2 ${
        statusSelect === item.value && "border-2 border-solid border-gray-500"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-[${item.color}] mr-2`}
        style={{ backgroundColor: item.color }}
      />
      {item.text}
    </button>
  );

  return (
    <aside className="p-8 pt-4">
      <div className="flex flex-col gap-4">
        {BUTTONS_LABELS.map((item: ButtonLabels) => renderButtonStatus(item))}
        {statusSelect !== "all" && (
          <button
            onClick={() => {
              onSelectStatus("all");
            }}
          >
            Mostrar todo
          </button>
        )}
      </div>
    </aside>
  );
};
