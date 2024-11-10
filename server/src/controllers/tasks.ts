import { Request, Response } from "express";
import { TaskModel } from "../models/tasks";

export const getAlltasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "get all tasks" });
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json({
      message: "task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getTask = (req: Request, res: Response) => {
  res.status(200).json({ message: `get task with id ${req.params.id}` });
};

export const updateTask = (req: Request, res: Response) => {
  res.status(200).json({ message: `task with id ${req.params.id} updated` });
};

export const deleteTask = (req: Request, res: Response) => {
  res.status(200).json({ message: `task with id ${req.params.id} deleted` });
};
