import Tasks from '../components/Tasks';
import { useTasks } from '../contexts/TaskProvider';

const CompletedTasks = () => {
  const { completedTasks } = useTasks();

  return <Tasks tasks={completedTasks} />;
};

export default CompletedTasks;
