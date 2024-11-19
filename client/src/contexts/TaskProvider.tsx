import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../api/apiClient';
import {
  GetTasksResponse,
  TaskContextType,
  taskInputs,
  TaskType,
} from '../types/types';
import { AxiosResponse } from 'axios';

type TaskProviderProps = {
  children: React.ReactNode;
};

const TasksContext = createContext<TaskContextType>({} as TaskContextType);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const getAllTasks = async (): Promise<void> => {
    try {
      const response: AxiosResponse<GetTasksResponse> =
        await axiosInstance.get('/tasks');
      const sortedTasks = response.data.tasks.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setTasks(sortedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (data: taskInputs): Promise<void> => {
    try {
      await axiosInstance.post('/tasks', data);
      getAllTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      getAllTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (id: string, data: taskInputs): Promise<void> => {
    try {
      await axiosInstance.patch(`/tasks/${id}`, data);
      getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, getAllTasks, createTask, deleteTask, editTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = (): TaskContextType => {
  return useContext(TasksContext);
};

export { TaskProvider, useTasks };
