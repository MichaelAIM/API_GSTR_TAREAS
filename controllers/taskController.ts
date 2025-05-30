import { Request, Response } from "express";
import Task from "../models/taskModel";
import { getSocket } from "../config/socket"; // Importamos la instancia de WebSocket

export const createTask = async (req: Request, res: Response) => {
  try {
    const { titulo, descripcion } = req.body;
    const task = await Task.create({ titulo, descripcion });

    getSocket().emit("newTask", task); // Emitimos evento de nueva tarea
    res.status(201).json(task);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTasks = async (_: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const task: any = await Task.findByPk(id);

    if (task) {
      await task.update({ status });
      getSocket().emit("taskUpdated", { id: task.id, status: task.status }); // Evento de actualización
      res.json(task);
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (task) {
      await task.destroy();
      getSocket().emit("taskDeleted", { id }); // Evento de eliminación
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
