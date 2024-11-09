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
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import colors from "../assets/colors/colors";

const ShoppingCard = () => {
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

          <DrawerBody>// DrawerBody</DrawerBody>

          <DrawerFooter>
            <Button
              _active={{ opacity: 0.7 }}
              _hover="none"
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
