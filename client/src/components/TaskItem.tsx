import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { TaskType } from '../types/types';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';
import { useTasks } from '../contexts/TaskProvider';

type TaskItemProp = {
  task: TaskType;
};

const TaskItem = ({ task }: TaskItemProp) => {
  const { _id, title, description, createdAt, completed, important } = task;
  const { toggleCompleted } = useTasks()

  return (
    <Flex
      direction={'column'}
      w={'100%'}
      minH={'200px'}
      bg={'#363636'}
      rounded={'1rem'}
      boxShadow={'1px 7px 12px rgba(8, 18, 69, 0.1)'}
      borderWidth={'1px'}
      borderColor={'#505050'}
      p={'1rem'}
      transition={'.3s'}
      _hover={{ transform: 'scale(1.02)', cursor: 'pointer' }}
    >
      <Heading
        as={'h4'}
        mb={'6px'}
      >
        {title}
      </Heading>
      <Text
        mb={'15px'}
        lineHeight={'normal'}
        flex={'1'}
      >
        {description || 'No description'}
      </Text>
      <small>{new Date(createdAt).toLocaleString()}</small>
      <Flex
        mt={'6px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Badge
            bg={completed ? 'green.400' : 'red.400'}
            p={'.5rem .6rem'}
            me={'2'}
            rounded={'4xl'}
            fontSize={'sm'}
            color={'white'}
            fontWeight={'600'}
            onClick={() => toggleCompleted(_id, completed)}
            >
            {completed ? 'Completed' : 'Incompleted'}
          </Badge>
          {important && (
            <Badge
            bg={'yellow.400'}
            p={'.5rem .6rem'}
            rounded={'4xl'}
            fontSize={'sm'}
            color={'white'}
            fontWeight={'600'}
            >
              Important
            </Badge>
          )}
        </Box>
        <Flex gap={'.5rem'}>
          <EditModal
            taskId={_id}
            task={task}
          />
          <DeleteModal taskId={_id} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TaskItem;
