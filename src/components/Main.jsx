import {
  Box,
  Flex,
  Image,
  ScaleFade,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

const Main = ({ movies }) => {
  const [data, setData] = useState(null);
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
                  onClick={() => {
                    setData(item);
                    onOpen();
                  }}
                  src={item.Poster}
                />
              </ScaleFade>
            </Box>
          );
        })}
        <MovieDetails
          title={data.Title}
          year={data.Year}
          type={data.Type}
          imdb={data.imdbID}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
