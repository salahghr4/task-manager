export type TaskType = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  important: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type taskInputs = {
  title: string;
  description: string;
  important: boolean;
  completed: boolean;
};

export type TaskContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  getAllTasks: () => Promise<void>;
  createTask: (data: taskInputs) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  editTask: (id: string, data: taskInputs) => Promise<void>;
};

export interface GetTasksResponse {
  tasks: TaskType[];
}
