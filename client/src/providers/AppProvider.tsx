import { FC } from 'react';
import { TaskProvider } from '../contexts/TaskProvider';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return ( 
    <TaskProvider>
      {children}
    </TaskProvider>
  )
};

export default AppProvider;
