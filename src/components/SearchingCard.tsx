import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import colors from "../assets/colors/colors";
import Store, { CartItem } from "../store";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchingCard = ({ onSearch }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const FoodSearch = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const filteredItems = Store((state) => state.filteredItems);
  const addToCart = Store((state) => state.addToCart); // Get addToCart from Zustand store

  const handleAddToCart = (item: CartItem) => {
    addToCart(item); // Add item to the cart
  };
  const handleSearch = () => {
    const searchText = FoodSearch.current?.value || "";
    onSearch(searchText);
  };

  return (
    <Box>
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
              <Input
                ref={FoodSearch}
                onChange={handleSearch}
                placeholder="Search ..."
              />
            </InputGroup>

            {/* Render filtered items */}
            <Box mt={4}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Box
                    justifyContent="space-between"
                    display="flex"
                    alignItems="center"
                    key={item.FoodName}
                    p={2}
                    borderBottom="1px solid #ccc"
                  >
                    <HStack>
                      <Image src={item.image} boxSize="50px" />
                      <Text mx={2} fontWeight="bold">
                        {item.FoodName}
                      </Text>
                    </HStack>
                    <VStack whiteSpace="wrap">
                      <Text
                        fontSize="lg"
                        color={colors.mainYello}
                        fontWeight="600"
                      >
                        ${item.price}
                      </Text>
                      <Button
                        p={2}
                        color={colors.black}
                        onClick={() =>
                          handleAddToCart({
                            image: item.image,
                            FoodName: item.FoodName,
                            price: item.price,
                            quantity: 1,
                          })
                        }
                      >
                        Add
                      </Button>
                    </VStack>
                  </Box>
                ))
              ) : (
                <Text color="gray.500" mt={4}>
                  No results found
                </Text>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SearchingCard;
