import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      height={"55px"}
      data-state="open"
      _open={{
        animation: "show-down .5s ease-out",
      }}
      backgroundColor="#1d1d1d"
      display={"flex"}
      justifyContent={"center"}
      padding={"3"}
      borderBottom={"0.1px #464649 solid"}
    >
      <Heading>Task Manager</Heading>
    </Box>
  );
};

export default Header;
