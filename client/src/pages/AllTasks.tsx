import Tasks from '../components/Tasks';
import { useTasks } from '../contexts/TaskProvider';

const AllTasks = () => {
  const { tasks } = useTasks();

  return <Tasks tasks={tasks} />;
};

export default AllTasks;
