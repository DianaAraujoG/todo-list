import { useEffect, useState } from "react";
import type { TaskAtributes } from "../types/Task.types";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/taskService";

interface useTasksReturn {
  taskList: TaskAtributes[];
  updateInfoTask: (task: TaskAtributes) => Promise<void>;
  createNewTask: (newTask: TaskAtributes) => Promise<void>;
  deleteOneTask: (taskId: TaskAtributes["id"]) => Promise<void>;
  isLoadingTaskList: boolean;
  isLoadingCreateTask: boolean;
  isLoadingUpdateTask: boolean;
  isLoadingDeleteTask: boolean;
}

export const useTasks = (): useTasksReturn => {
  const [taskList, setTaskList] = useState<TaskAtributes[]>([]);
  const [isLoadingTaskList, setIsLoadingTaskList] = useState<boolean>(false);
  const [isLoadingCreateTask, setIsLoadingCreateTask] =
    useState<boolean>(false);
  const [isLoadingUpdateTask, setIsLoadingUpdateTask] =
    useState<boolean>(false);
  const [isLoadingDeleteTask, setIsLoadingDeleteTask] =
    useState<boolean>(false);

  useEffect(() => {
    fetchTaskList();
  }, []);

  const fetchTaskList = async (): Promise<void> => {
    try {
      setIsLoadingTaskList(true);
      const dataTask = await getTasks();
      setTaskList(dataTask);
    } catch (error) {
      console.error("Fail fetch task list - ", error);
    } finally {
      setIsLoadingTaskList(false);
    }
  };

  const createNewTask = async (newTask: TaskAtributes): Promise<void> => {
    try {
      setIsLoadingCreateTask(true);
      await createTask(newTask);
    } catch (error) {
      console.error("Fail create task - ", error);
    } finally {
      setIsLoadingCreateTask(false);
    }
  };

  const updateInfoTask = async (task: TaskAtributes): Promise<void> => {
    try {
      setIsLoadingUpdateTask(true);
      if (task.id) {
        await updateTask(task.id, task);
      }
    } catch (error) {
      console.error("Fail update task - ", error);
    } finally {
      setIsLoadingUpdateTask(false);
    }
  };

  const deleteOneTask = async (taskId: TaskAtributes["id"]): Promise<void> => {
    try {
      setIsLoadingDeleteTask(true);
      await deleteTask(taskId);
    } catch (error) {
      console.error("Fail delete task - ", error);
    } finally {
      setIsLoadingDeleteTask(false);
    }
  };

  return {
    taskList,
    updateInfoTask,
    createNewTask,
    deleteOneTask,
    isLoadingTaskList,
    isLoadingCreateTask,
    isLoadingUpdateTask,
    isLoadingDeleteTask,
  };
};
