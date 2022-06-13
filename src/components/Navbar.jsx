import { Flex, Text, VStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <VStack>
      <VStack p="5" w="100%" align="flex-end">
        <IconButton
          icon={darkMode ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={handleChange}
        />
      </VStack>
      <Text fontSize="7xl" fontWeight="bold">
        Movie Search
      </Text>
    </VStack>
  );
};

export default Navbar;
