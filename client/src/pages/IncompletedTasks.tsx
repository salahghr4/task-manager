import Tasks from '../components/Tasks';
import { useTasks } from '../contexts/TaskProvider';

const IncompletedTasks = () => {
  const { incompletedTasks } = useTasks();

  return <Tasks tasks={incompletedTasks} />;
};

export default IncompletedTasks;
