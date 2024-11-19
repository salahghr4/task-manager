import { Flex, Grid, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskType } from '../types/types';
import AddModal from './Modals/AddModal';
import TaskItem from './TaskItem';

const Tasks: FC<{ tasks: TaskType[] }> = ({ tasks }) => {
  return (
    <Flex
      p={'1px'}
      overflow={'hidden'}
      w={'100%'}
      rounded={'3xl'}
      minH={'100%'}
    >
      <Flex
        w={'100%'}
        bg={'#242424'}
        rounded={'3xl'}
        borderWidth={'1px'}
        borderColor={'#505050'}
        p={'2rem'}
        direction={'column'}
        gap={'1rem'}
        overflowY={'auto'}
        className="tasks-container"
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Heading
            as={'h1'}
            fontSize={'clamp(1.5rem, 2vw, 2rem)'}
            letterSpacing={'1px'}
            fontFamily={'PT Sans'}
          >
            <span className="title-stick">All</span> tasks
          </Heading>
          <AddModal />
        </Flex>
        <Grid
          templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
          gap={'1.5rem'}
        >
          {tasks.map((task) => {
            return (
              <TaskItem
                task={task}
                key={task._id}
              />
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Tasks;
