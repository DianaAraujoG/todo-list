import React, { useEffect, useState } from "react";
import type { ModalTaskProps } from "./ModalTask.types";
import type {
  ButtonLabels,
  TaskAtributes,
  TaskStatus,
} from "../../types/Task.types";
import { BUTTONS_LABELS } from "../../constants";

export const ModalTask: React.FC<ModalTaskProps> = ({
  action,
  taskInfo,
  onSend,
  onClose,
}) => {
  const [title, setTitle] = useState<TaskAtributes["title"]>("");
  const [status, setStatus] = useState<TaskAtributes["status"]>("pending");
  const [deliveryDate, setDeliveryDate] =
    useState<TaskAtributes["deliveryDate"]>("");
  const [description, setDescription] =
    useState<TaskAtributes["description"]>("");

  useEffect(() => {
    if (taskInfo?.title.length) {
      setTitle(taskInfo.title);
    }
    if (taskInfo?.description.length) {
      setDescription(taskInfo.description);
    }
    if (taskInfo?.status.length) {
      setStatus(taskInfo.status);
    }
    if (taskInfo?.deliveryDate.length) {
      setDeliveryDate(taskInfo.deliveryDate);
    }
  }, []);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };
  const handleChangeStatus = (newStatus: TaskStatus) => {
    setStatus(newStatus);
  };
  const handleChangeDeliveryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value);
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // los meses empiezan en 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleOnSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let newTask: TaskAtributes = {
      title,
      status,
      description,
      deliveryDate,
      dateCreate: formatDate(new Date()),
    };

    if (taskInfo?.id?.length) {
      newTask = { ...newTask, id: taskInfo.id };
    }

    if (title.trim().length && description.trim().length) {
      onSend(newTask);
    }
  };

  const handleOnCancel = (): void => {
    setTitle("");
    setStatus("pending");
    setDescription("");

    onClose();
  };

  const renderButtonStatus = (item: ButtonLabels) => (
    <button
      type="button"
      key={item.value}
      onClick={() => {
        handleChangeStatus(item.value);
      }}
      className={`flex-1 flex items-center bg-gray-100/50 hover:bg-gray-200/50 text-sm text-gray-700 rounded-lg px-4 py-2 ${
        status === item.value && "border-2 border-solid border-gray-500"
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
    <div
      id="static-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleOnCancel}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <form
          className="max-w-md mx-auto p-4 bg-white rounded-lg space-y-5"
          onSubmit={handleOnSubmitForm}
        >
          <div>
            <label
              htmlFor="title"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Titulo
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleChangeTitle}
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Agrega titulo ..."
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Descripción
            </label>
            <textarea
              id="description"
              rows={5}
              value={description}
              onChange={handleChangeDescription}
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Escribe la descripción..."
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Fecha de entrega
            </label>
            <input
              id="date"
              type="date"
              value={deliveryDate as unknown as string}
              onChange={handleChangeDeliveryDate}
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between gap-2">
            {BUTTONS_LABELS.map((item: ButtonLabels) =>
              renderButtonStatus(item)
            )}
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg px-5 py-2.5"
              onClick={handleOnCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg px-5 py-2.5"
            >
              {action === "create" ? "Agregar" : "Editar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
