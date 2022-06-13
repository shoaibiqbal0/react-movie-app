import { Text, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = () => {
    toggleColorMode();
  };

  return (
    <VStack>
      <VStack p="5" w="100%" align="flex-end">
        <IconButton
          onClick={handleChange}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          isRound="true"
        />
      </VStack>
      <Text
        bgGradient="linear(to-r, red.500, blue.500, purple.500)"
        bgClip="text"
        fontSize={["5xl", "6xl", "7xl"]}
        fontWeight="bold"
        p="5"
      >
        Movie Search
      </Text>
    </VStack>
  );
};

export default Navbar;
