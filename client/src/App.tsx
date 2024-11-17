import Main from '@/components/Main';
import SideBar from './components/SideBar';
import Tasks from './components/Tasks';
import { TaskProvider } from './contexts/TaskProvider';

const App = () => {
  return (
    <TaskProvider>
      <Main>
        <SideBar />
        <Tasks />
      </Main>
    </TaskProvider>
  );
};

export default App;
