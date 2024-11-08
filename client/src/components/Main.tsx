import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const Main: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Flex
      justify={"space-between"}
      minH={"100vh"}
      gap={"3rem"}
      p={"4rem"}
    >
      {children}
    </Flex>
  );
};

export default Main;
