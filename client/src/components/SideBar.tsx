import { Flex, Heading, Center, Text } from '@chakra-ui/react';
import { IoMdHome } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdAssignmentLate } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  let { pathname } = useLocation();

  return (
    <Flex
      minW={'230px'}
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
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to={'/'}>
              <IoMdHome size={'21px'} />
              <Text>All tasks</Text>
            </Link>
          </li>
          <li className={pathname === '/completed' ? 'active' : ''}>
            <Link to={'completed'}>
              <IoCheckmarkSharp size={'21px'} />
              <Text>Completed</Text>
            </Link>
          </li>
          <li className={pathname === '/important' ? 'active' : ''}>
            <Link to={'important'}>
              <FaTasks size={'19px'} />
              <Text>Important</Text>
            </Link>
          </li>
          <li className={pathname === '/incompleted' ? 'active' : ''}>
            <Link to={'incompleted'}>
              <MdAssignmentLate size={'21px'} />
              <Text>Not completed</Text>
            </Link>
          </li>
        </ul>
      </Center>
    </Flex>
  );
};

export default SideBar;
