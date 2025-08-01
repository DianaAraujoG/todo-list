import axios from "axios";
import type { TaskAtributes } from "../types/Task.types";

const BASE_URL = "http://localhost:3001/tasks";

export const getTasks = async (): Promise<TaskAtributes[]> => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Error al traer lista:", err);
    throw err;
  }
};

export const createTask = async (
  task: Omit<TaskAtributes, "id">
): Promise<TaskAtributes> => {
  try {
    const res = await axios.post(BASE_URL, task);
    return res.data;
  } catch (err) {
    console.error("Error al crear:", err);
    throw err;
  }
};

export const updateTask = async (
  id: TaskAtributes["id"],
  task: TaskAtributes
): Promise<TaskAtributes> => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, task);
    return res.data;
  } catch (err) {
    console.error("Error al actualizar:", err);
    throw err;
  }
};

export const deleteTask = async (id: TaskAtributes["id"]): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (err) {
    console.error("Error al eliminar:", err);
    throw err;
  }
};
