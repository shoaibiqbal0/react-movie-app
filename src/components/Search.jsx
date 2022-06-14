import { Flex, Input } from "@chakra-ui/react";

const Search = ({ search, setSearch, searchMovie }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Flex justify="center" p="5">
      <Input
        onChange={handleChange}
        maxW="800px"
        borderRadius="full"
        variant="filled"
        value={search}
        onKeyDown={searchMovie}
        placeholder="Enter a movie title and press Enter to search..."
      />
    </Flex>
  );
};

export default Search;
