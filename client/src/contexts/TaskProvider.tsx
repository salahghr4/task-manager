import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../api/apiClient';
import { TaskContextType, TaskType } from '../types/types';

type TaskProviderProps = {
  children: React.ReactNode;
};

const TasksContext = createContext<TaskContextType>({} as TaskContextType);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const getAllTasks = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get('/tasks');
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const value = { tasks, setTasks, getAllTasks };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = (): TaskContextType => {
  return useContext(TasksContext);
};

export { TaskProvider, useTasks };
