import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/SideBar/Sidebar";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";
import { ModalTask } from "./components/ModalTask/ModalTask";
import { useTasks } from "./hooks/useTasks";
import type { TaskAtributes } from "./types/Task.types";
import type { actionsModal } from "./components/ModalTask/ModalTask.types";
import type { SelectStatus } from "./components/SideBar/Sidebar.types";

import "./index.css";
import "./App.css";
import { ModalConfirm } from "./components/ModalConfirm/ModalConfirm";

const DEFAULT_TASK: TaskAtributes = {
  title: "",
  description: "",
  dateCreate: "",
  deliveryDate: "",
  status: "pending",
};

function App() {
  const { taskList, createNewTask, updateInfoTask, deleteOneTask } = useTasks();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<actionsModal>("create");
  const [taskEdit, setTaskEdit] = useState<TaskAtributes>(DEFAULT_TASK);
  const [taskDelete, setTaskDelete] = useState<TaskAtributes>(DEFAULT_TASK);
  const [filterList, setFilterList] = useState<TaskAtributes[]>([]);
  const [statusSelect, setStatusSelect] = useState<SelectStatus>("all");

  console.log("taskList: ", taskList, "taskDelete: ", taskDelete);

  useEffect(() => {
    setFilterList(taskList);
  }, [taskList]);

  const handleOnCreate = (): void => {
    setModalAction("create");
    setIsOpenModal(true);
  };

  const handleOnEdit = (task: TaskAtributes): void => {
    setTaskEdit(task);
    setModalAction("edit");
    setIsOpenModal(true);
  };

  const handleSelectDelete = (task: TaskAtributes): void => {
    setTaskDelete(task);
    setIsOpenModalConfirm(true);
  };

  const handleOnDelete = (): void => {
    deleteOneTask(taskDelete.id);
  };

  const handleOnSendModalData = (data: TaskAtributes): void => {
    if (modalAction === "create") {
      createNewTask(data);
    } else {
      updateInfoTask(data);
    }
  };

  const handleOnSelectStatus = (status: SelectStatus): void => {
    setStatusSelect(status);
    let statusList = taskList;
    if (status !== "all") {
      statusList = taskList.filter((task) => task.status === status);
    }

    setFilterList(statusList);
  };

  return (
    <>
      <Header onCreate={handleOnCreate} />
      <div className="flex">
        <Sidebar
          onSelectStatus={handleOnSelectStatus}
          statusSelect={statusSelect}
        />
        <TaskContainer
          taskList={filterList}
          onEdit={handleOnEdit}
          onDelete={handleSelectDelete}
        />
      </div>
      {isOpenModal && (
        <ModalTask
          taskInfo={taskEdit}
          action={modalAction}
          onSend={handleOnSendModalData}
          onClose={() => {
            setTaskEdit(DEFAULT_TASK);
            setIsOpenModal(false);
          }}
        />
      )}
      {isOpenModalConfirm && (
        <ModalConfirm
          titleNote={taskDelete.title}
          onCancel={() => {
            setTaskDelete(DEFAULT_TASK);
            setIsOpenModalConfirm(false);
          }}
          onConfirm={handleOnDelete}
        />
      )}
    </>
  );
}

export default App;
