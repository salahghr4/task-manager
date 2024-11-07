import { Box, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      display={"flex"}
      justifyContent={"center"}
      padding={"3"}
      borderBottom={"0.1px #464649 solid"}
    >
      <Heading>Task Manager</Heading>
    </Box>
  )
}

export default Header