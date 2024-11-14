import { Flex, Heading, Center, Text } from '@chakra-ui/react';
import { IoMdHome } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdAssignmentLate } from 'react-icons/md';

const SideBar = () => {
  return (
    <Flex
      minW={'250px'}
      direction={'column'}
      minH={'100%'}
      bg={'#242424'}
      rounded={'3xl'}
      borderWidth={'1px'}
      borderColor={'#505050'}
      alignItems={'center'}
    >
      <Heading pt={'1rem'}>Task Manager</Heading>
      <Center
        h={'100%'}
        w={'100%'}
      >
        <ul>
          <li className="active">
            <IoMdHome size={'21px'} />
            <Text>All tasks</Text>
          </li>
          <li>
            <IoCheckmarkSharp size={'21px'} />
            <Text>Completed</Text>
          </li>
          <li>
            <FaTasks size={'19px'} />
            <Text>Important</Text>
          </li>
          <li>
            <MdAssignmentLate size={'21px'} />
            <Text>Not completed</Text>
          </li>
        </ul>
      </Center>
    </Flex>
  );
};

export default SideBar;
