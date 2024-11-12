import { Request, Response } from "express";
import { TaskModel } from "../models/tasks";
import { isValidObjectId } from "mongoose";

export const getAlltasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json({
      success: true,
      message: "Fetched all tasks successfully",
      tasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "task created successfully",
      task,
    });
  } catch (error: any) {
    console.error("Error creating task:", error);

    if (error.name === "ValidationError") {
      res.status(400).json({
        success: false,
        message: error.errors.title.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An error occurred while creating the task",
      });
    }
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the task",
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
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
  } catch (error: any) {
    console.error("Error updating task:", error);

    if (error.name === "ValidationError") {
      res.status(400).json({
        success: false,
        message: error.errors.title.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the task",
      });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the task",
    });
  }
};
