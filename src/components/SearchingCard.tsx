import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import colors from "../assets/colors/colors";

const SearchingCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <ImSearch color={colors.mainBrown} size={15} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Foods</DrawerHeader>
          <DrawerBody px={5}>
            <InputGroup>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input placeholder="Search ..." />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchingCard;
