import { Request, Response } from "express";
import { TaskModel } from "../models/tasks";
import { isValidObjectId } from "mongoose";
import asyncHandler from "../middleware/asyncHandler";

export const getAlltasks = asyncHandler(async (req: Request, res: Response) => {
  const tasks = await TaskModel.find({});
  res.status(200).json({
    success: true,
    message: "Fetched all tasks successfully",
    tasks,
  });
});

export const createTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await TaskModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "task created successfully",
    task,
  });
});

export const getTask = asyncHandler(async (req: Request, res: Response) => {
  const { id: taskId } = req.params;

  if (!isValidObjectId(taskId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid task ID format" });
  }

  const task = await TaskModel.findById(taskId);

  if (!task) {
    return res
      .status(404)
      .json({ success: false, message: `Task with ID ${taskId} not found` });
  }

  res
    .status(200)
    .json({ success: true, message: `task fetched successefully`, task });
});

export const updateTask = asyncHandler(async (req: Request, res: Response) => {
  const { id: taskId } = req.params;

  if (!isValidObjectId(taskId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid task ID format" });
  }

  const task = await TaskModel.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res
      .status(404)
      .json({ success: false, message: `Task with ID ${taskId} not found` });
  }

  res
    .status(200)
    .json({ success: true, message: `task updated successefully`, task });
});

export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
  const { id: taskId } = req.params;

  if (!isValidObjectId(taskId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid task ID format" });
  }

  const task = await TaskModel.findByIdAndDelete(taskId);

  if (!task) {
    return res
      .status(404)
      .json({ success: false, message: `Task with ID ${taskId} not found` });
  }

  res
    .status(200)
    .json({ success: true, message: `task deleted successefully` });
});
