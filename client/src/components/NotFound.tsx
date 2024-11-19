import { Button, Center, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <Center h={'100vh'} flexDirection={'column'} gap={'3'}>
        <Heading size={'5xl'}>404 Page Not Found</Heading>
        <Text fontSize={'lg'}>Sorry, we couldn't find the page you're looking for.</Text>
        <Button>
          <Link to={'/'}>Go back</Link>
        </Button>
      </Center>
  );
};

export default NotFound;
