import { Flex, Heading } from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Flex
      minW={'300px'}
      direction={'column'}
      minH={'100%'}
      bg={'#242424'}
      rounded={'3xl'}
      borderWidth={'1px'}
      borderColor={'silver'}
      p={'2rem'}
      alignItems={'center'}
    >
      <Heading>Task Manager</Heading>
    </Flex>
  );
};

export default SideBar;
