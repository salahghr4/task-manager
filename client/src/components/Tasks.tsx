import { EmptyState } from '@/components/ui/empty-state';
import { Box, Button, Flex, Grid, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaTasks } from 'react-icons/fa';
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
          <AddModal>
            <Box
              cursor={'pointer'}
              transition={'.3s'}
              _hover={{ transform: 'scale(1.06)' }}
            >
              <CiCirclePlus
                size={'50px'}
                color="#6a6a6a"
              />
            </Box>
          </AddModal>
        </Flex>
        <Grid
          templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
          gap={'1.5rem'}
        >
          {tasks && tasks.length ? (
            tasks.map((task) => (
              <TaskItem
                task={task}
                key={task._id}
              />
            ))
          ) : (
            <EmptyState
              icon={<FaTasks />}
              title="No tasks available"
              description="Add a new task to get started"
            >
              <AddModal>
                <Button>
                  Add task
                  <CiCirclePlus
                    size={'50px'}
                    color="#6a6a6a"
                  />
                </Button>
              </AddModal>
            </EmptyState>
          )}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Tasks;
