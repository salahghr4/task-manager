import { toaster } from '@/components/ui/toaster';
import { AxiosResponse } from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../api/apiClient';
import {
  GetTasksResponse,
  TaskContextType,
  taskInputs,
  TaskType,
} from '../types/types';

type TaskProviderProps = {
  children: React.ReactNode;
};

const TasksContext = createContext<TaskContextType>({} as TaskContextType);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const hanldeFetchError = (error: any) => {
    if (error.request) {
      toaster.create({
        title: `Failed to connect to the server`,
        type: 'error',
        description:
          'Please check your internet connection or try again later.',
        duration: 5000,
      });
    } else if (error.response) {
      toaster.create({
        title: `Error ${error.response.status}`,
        type: 'error',
        description: error.response.statusText,
        duration: 5000,
      });
    } else {
      toaster.create({
        title: 'Unexpected Error',
        type: 'error',
        description: error.message,
        duration: 5000,
      });
    }
  };
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
    } catch (error: any) {
      hanldeFetchError(error);
    }
  };

  const createTask = async (data: taskInputs): Promise<void> => {
    try {
      await axiosInstance.post('/tasks', data);
      await getAllTasks();
      toaster.create({
        title: `Task created successfully`,
        type: 'success',
      });
    } catch (error) {
      hanldeFetchError(error);
    }
  };

  const deleteTask = async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      await getAllTasks();
      toaster.create({
        type: 'success',
        description: 'Task deleted successfully',
      });
    } catch (error) {
      hanldeFetchError(error);
    }
  };

  const editTask = async (id: string, data: taskInputs): Promise<void> => {
    try {
      await axiosInstance.patch(`/tasks/${id}`, data);
      await getAllTasks();
      toaster.create({
        title: `Task edited successfully`,
        type: 'success',
      });
    } catch (error) {
      hanldeFetchError(error);
    }
  };

  const toggleCompleted = async (id: string, completed: boolean): Promise<void> => {
    try {
      await axiosInstance.patch(`/tasks/${id}`, { completed: !completed });
      await getAllTasks();
      toaster.create({
        title: `Task set to ${completed ? 'incompleted' : 'completed'} successfully`,
        type: 'success',
      });
    } catch (error) {
      hanldeFetchError(error);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const importantTasks = tasks.filter((task) => task.important);
  const incompletedTasks = tasks.filter((task) => !task.completed);

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        getAllTasks,
        createTask,
        deleteTask,
        editTask,
        toggleCompleted,
        completedTasks,
        importantTasks,
        incompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = (): TaskContextType => {
  return useContext(TasksContext);
};

export { TaskProvider, useTasks };
