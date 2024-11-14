import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { CiCirclePlus } from 'react-icons/ci';
import TaskItem from './TaskItem';
const Tasks = () => {
  return (
    <Flex p={"1px"} overflow={'hidden'} w={'100%'} rounded={'3xl'} minH={'100%'}>
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
          <Box
            cursor={'pointer'}
            transition={'.3s'}
            _hover={{ transform: 'scale(1.1)' }}
          >
            <CiCirclePlus
              size={'50px'}
              color="#6a6a6a"
            />
          </Box>
        </Flex>
        <Grid
          templateColumns={'repeat(auto-fit, minmax(350px, 1fr))'}
          gap={'1rem'}
        >
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Tasks;
