import { Request, Response } from "express";

export const getAlltasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "get all tasks" });
};

export const createTask = (req: Request, res: Response) => {
  res.status(200).json({ message: "task added", task: req.body });
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
