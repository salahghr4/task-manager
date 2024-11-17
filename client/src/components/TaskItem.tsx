import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdEditDocument, MdDelete } from 'react-icons/md';
import { TaskType } from '../types/types';

type TaskItemProp = {
  task: TaskType;
};

const TaskItem = ({ task }: TaskItemProp) => {
  console.log(task);
  
  const { title, description, createdAt, completed,  } = task;

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
      <small>{new Date(createdAt).toLocaleDateString()}</small>
      <Flex
        mt={'6px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Badge
          bg={completed ? 'green.400' : 'red.400'}
          p={'.5rem .6rem'}
          rounded={'4xl'}
          fontSize={'md'}
          color={'white'}
          fontWeight={'600'}
        >
          {completed ? 'Completed' : 'Incompleted'}
        </Badge>
        <Flex gap={'.5rem'}>
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            cursor={'pointer'}
            title="Edit"
          >
            <MdEditDocument size={'25px'} />
          </Box>
          <Box
            _hover={{ transform: 'scale(1.1)' }}
            cursor={'pointer'}
            title="Delete"
          >
            <MdDelete size={'25px'} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TaskItem;
