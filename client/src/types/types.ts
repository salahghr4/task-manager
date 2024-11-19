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
  createTask: (
    title: string,
    description: string,
    isImportant: boolean
  ) => Promise<void>;
  deleteTask: (id: string) => Promise<void>
};
export type ModalContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface GetTasksResponse {
  tasks: TaskType[];
}
