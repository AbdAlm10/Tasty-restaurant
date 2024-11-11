import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CgRemove } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import colors from "../assets/colors/colors";
import Store from "../store"; // Import Zustand store
import { FaRegTimesCircle } from "react-icons/fa";

const ShoppingCard = () => {
  const { cartItems, removeFromCart, decreaseItems, total } = Store(
    (state) => state
  ); // Get cart items and removeFromCart function
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <FaCartShopping color={colors.mainBrown} size={20} />
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
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody px={5}>
            {cartItems.length === 0 ? (
              <Text>No items in the cart</Text>
            ) : (
              cartItems.map((item, index) => (
                <HStack
                  mt={5}
                  key={index}
                  justifyContent="space-between"
                  display="flex"
                >
                  <HStack>
                    <Image src={item.image} boxSize="65px" />

                    {/*Titles*/}
                    <VStack mx={2} alignItems="start" fontSize="xs" spacing={1}>
                      <Heading size="sm" whiteSpace="nowrap">
                        {item.FoodName}
                      </Heading>

                      <VStack
                        fontSize="sm"
                        fontWeight="500"
                        alignItems="start"
                        spacing={0}
                      >
                        <HStack>
                          <Text>Quantity:</Text>
                          <Text
                            fontSize="md"
                            fontWeight="bold"
                            color={colors.mainYello}
                          >
                            {item.quantity}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text>Unit price:</Text>
                          <Text
                            fontSize="md"
                            fontWeight="bold"
                            color={colors.mainYello}
                          >
                            {item.price}$
                          </Text>
                        </HStack>
                      </VStack>
                    </VStack>
                  </HStack>

                  {/*Buttons*/}
                  <VStack spacing={7} my={3}>
                    <Button
                      _hover={{ bg: "white" }}
                      p={0}
                      h={0}
                      onClick={() => decreaseItems(item.FoodName)}
                    >
                      <CgRemove color={colors.mainYello} size={25} />
                    </Button>
                    <Button
                      _hover={{ bg: "white" }}
                      p={0}
                      h={0}
                      onClick={() => removeFromCart(item.FoodName)}
                    >
                      <FaRegTimesCircle color={colors.mainYello} size={25} />
                    </Button>
                  </VStack>
                </HStack>
              ))
            )}
          </DrawerBody>

          <DrawerFooter p={3} justifyContent="space-between">
            <HStack ml={5}>
              <Text fontWeight={600}>Total:</Text>
              <Text fontWeight="bold" fontSize="lg" color={colors.mainYello}>
                {" "}
                {total}$
              </Text>
            </HStack>
            <Button
              _active={{ opacity: 0.7 }}
              bg={colors.mainYello}
              color="white"
            >
              Complete orders
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShoppingCard;
