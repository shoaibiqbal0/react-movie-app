import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const Main = ({ movies }) => {
  return (
    <Flex justify="center" p="5">
      <SimpleGrid columns={[2, 3, 4]} maxW="1200px" w="100%" spacing="5">
        {movies.Search?.map((item, index) => {
          return (
            <Box key={index}>
              <Image src={item.Poster}></Image>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
