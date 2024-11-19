import Tasks from '../components/Tasks';
import { useTasks } from '../contexts/TaskProvider';

const ImportantTasks = () => {
  const { importantTasks } = useTasks();

  return <Tasks tasks={importantTasks} />;
};

export default ImportantTasks;
