import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdEditDocument, MdDelete } from 'react-icons/md';

const TaskItem = () => {
  return (
    <Flex
      direction={'column'}
      w={'100%'}
      pt={'1.2rem'}
      py={'1rem'}
      bg={'#363636'}
      rounded={'1rem'}
      boxShadow={'1px 7px 12px rgba(8, 18, 69, 0.1)'}
      borderWidth={'1px'}
      borderColor={'#505050'}
      p={'1rem'}
      transition={'.3s'}
      _hover={{transform: 'scale(1.02)', cursor: "pointer"}}
    >
      <Heading as={'h4'} mb={'6px'}>Task title</Heading>
      <Text mb={'15px'} lineHeight={'normal'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo
        similique nihil veniam nemo magni adipisci modi{' '}
      </Text>
      <small>10/10/2023</small>
      <Flex mt={'6px'} justifyContent={'space-between'} alignItems={'center'}>
        <Badge
          bg={'green.600'}
          p={'.5rem .6rem'}
          rounded={'4xl'}
          fontSize={'md'}
          color={'white'}
          fontWeight={'600'}
        >
          Completed
        </Badge>
        <Flex gap={'.5rem'}>
          <Box _hover={{transform: 'scale(1.1)'}} cursor={'pointer'} title='Edit'>
            <MdEditDocument size={'25px'}/>
          </Box>
          <Box _hover={{transform: 'scale(1.1)'}} cursor={'pointer'} title='Delete'>
            <MdDelete size={'25px'}/>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TaskItem;
