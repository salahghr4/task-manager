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

export type TaskContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  getAllTasks: () => Promise<void>;
};
