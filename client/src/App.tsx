import Main from '@/components/Main';
import SideBar from './components/SideBar';
import Tasks from './components/Tasks';
import AppProvider from './providers/AppProvider';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <AppProvider>
      <Main>
        <SideBar />
        <Tasks />
        <Toaster />
      </Main>
    </AppProvider>
  );
};

export default App;
