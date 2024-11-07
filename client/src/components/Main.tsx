import { Flex } from "@chakra-ui/react";

type MainProps = {
  children: React.ReactElement;
};

const Main = ({ children }: MainProps) => {
  return (
    <Flex
      justify={"center"}
      minH={"calc(100vh - 55px)"}
      pt={"3rem"}
    >
      {children}
    </Flex>
  );
};

export default Main;
