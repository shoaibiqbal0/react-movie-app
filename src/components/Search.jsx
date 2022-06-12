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
      />
    </Flex>
  );
};

export default Search;
