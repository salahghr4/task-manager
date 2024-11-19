import { FC } from 'react';
import { TaskProvider } from '../contexts/TaskProvider';
import { ModalProvider } from '../contexts/ModalProvider';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TaskProvider>
      <ModalProvider>{children}</ModalProvider>
    </TaskProvider>
  );
};

export default AppProvider;
