import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

const MovieDetails = ({ title, year, type, imdb }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Movie Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="flex-start">
              <Text>
                <strong>Title:</strong> {title}
              </Text>
              <Text>
                <strong>Year:</strong> {year}
              </Text>
              <Text>
                <strong>Type:</strong> {type}
              </Text>
              <Text>
                <strong>ImdbID:</strong>{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  href={"https://www.imdb.com/title/" + imdb}
                  isExternal
                >
                  <Tag colorScheme="blue">{imdb}</Tag>
                </Link>
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Link
              style={{ textDecoration: "none" }}
              href={"https://www.imdb.com/title/" + imdb}
              isExternal
            >
              <Button variant="ghost">Go to IMDb</Button>
            </Link>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MovieDetails;
