import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Main = ({ movies }) => {
  return (
    <Flex>
      {movies.Search.map((item, index) => {
        return (
          <Box key={index}>
            <Image src={item.Poster}></Image>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Main;
