import Main from '@/components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import ImportantTasks from './pages/ImportantTasks';
import IncompletedTasks from './pages/IncompletedTasks';
import AppProvider from './providers/AppProvider';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppProvider>
        <Routes>
          <Route path="/"element={<Main />}>
            <Route index element={<AllTasks />} />
            <Route path="completed" element={<CompletedTasks />} />
            <Route path="incompleted" element={<IncompletedTasks />} />
            <Route path="important" element={<ImportantTasks />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
