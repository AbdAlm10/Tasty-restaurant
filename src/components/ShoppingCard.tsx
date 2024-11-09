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
  Image,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import colors from "../assets/colors/colors";

interface ShoppingCardItems {
  image: string;
  FoodName: string;
  price: number;
  quantity: number;
}

const ShoppingCard = (items: ShoppingCardItems) => {
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
          <DrawerHeader>Shopping Card</DrawerHeader>

          <DrawerBody>
            <Image src={items.image} />
            <VStack>
              <Heading>{items.FoodName}</Heading>
              <Text>{items.quantity}</Text> - <Text>{items.price}</Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
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
