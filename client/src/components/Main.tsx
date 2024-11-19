import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import SideBar from './SideBar';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

const Main: FC = () => {
  return (
    <Flex
      justify={'space-between'}
      h={'100vh'}
      gap={'3rem'}
      p={'4rem'}
    >
      <SideBar />
      <Outlet />
      <Toaster />
    </Flex>
  );
};

export default Main;
