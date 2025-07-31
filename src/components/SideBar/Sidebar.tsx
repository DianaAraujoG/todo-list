import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside>
      <ul className="list-none">
        <li>Pendiente</li>
        <li>En progreso</li>
        <li>Completado</li>
      </ul>
    </aside>
  );
};
