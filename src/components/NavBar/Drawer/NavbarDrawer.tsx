import {
  FaBars,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import colors from "../../../assets/colors/colors";
import logo from "../../../assets/Restaurant.webp";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import DrawerPageName from "./DrawerPageName";
import ContactBoxContainer from "./ContactBoxContainer";
import { Link } from "react-router-dom";

const NavbarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button _hover={{ bg: "white" }} bg="white" onClick={onOpen} p={0}>
        <FaBars size={20} color={colors.mainColor1} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <Box p={3}>
            <DrawerCloseButton
              bg={colors.mainColor2}
              color="white"
              my={5}
              borderRadius={20}
            />
            <Image w="100px" h="55px" src={logo} />
          </Box>

          <DrawerBody color={colors.mainColor1} fontWeight={600}>
            <Box>
              <Link to={"/"}>
                <DrawerPageName>Home</DrawerPageName>
              </Link>
              <Link to={"FoodMenu/"}>
                <DrawerPageName>Food Menu</DrawerPageName>
              </Link>
              <Link to={"LatestBlog/"}>
                <DrawerPageName>Latest Blog</DrawerPageName>
              </Link>
              <Link to={"Contact/"}>
                <DrawerPageName>Contact</DrawerPageName>
              </Link>
            </Box>

            <Box mt={10}>
              <ContactBoxContainer />
            </Box>
          </DrawerBody>

          <Center>
            <DrawerFooter color={colors.mainColor1}>
              <HStack spacing={10}>
                <Box
                  _hover={{
                    color: "#ed751c",
                  }}
                >
                  <FaFacebookF size={25} />
                </Box>
                <Box
                  _hover={{
                    color: "#ed751c",
                  }}
                >
                  <FaTwitter size={25} />
                </Box>
                <Box
                  _hover={{
                    color: "#ed751c",
                  }}
                >
                  <FaYoutube size={25} />
                </Box>
                <Box
                  _hover={{
                    color: "#ed751c",
                  }}
                >
                  <FaLinkedin size={25} />
                </Box>
              </HStack>
            </DrawerFooter>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
