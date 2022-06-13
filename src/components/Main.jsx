import {
  Box,
  Flex,
  Image,
  ScaleFade,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import MovieDetails from "./MovieDetails";

const Main = ({ movies }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justify="center" p="5">
      <SimpleGrid columns={[2, 3, 4]} maxW="1200px" w="100%" spacing="5">
        {movies.Search?.map((item, index) => {
          return (
            <Box key={index}>
              <ScaleFade
                initialScale={0.9}
                in={true}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  _hover={{ cursor: "pointer" }}
                  onClick={onOpen}
                  src={item.Poster}
                />
                <MovieDetails
                  title={item.Title}
                  year={item.Year}
                  type={item.Type}
                  imdb={item.imdbID}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </ScaleFade>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
