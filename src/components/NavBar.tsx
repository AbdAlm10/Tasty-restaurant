import { Box, Hide, HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/Restaurant.webp";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import colors from "../assets/colors/colors";

const NavBar = () => {
  return (
    <HStack bg="white" justifyContent="space-between" p={5}>
      <Hide above="md">
        <FaBars color={colors.mainColor1} />
      </Hide>
      <Image
        src={logo}
        alt="Logo"
        w={{ base: "75px", md: "100px" }}
        h={{ base: "40px", md: "55px" }}
      />

      <Show above="md">
        <HStack color={colors.mainColor1} whiteSpace="nowrap" ml={4} p={2}>
          <Text fontWeight="500">Home</Text>
          <Text ml={4}>Food Menu</Text>
          <Text ml={4}>Latest Blog</Text>
          <Text ml={4}>Contact</Text>
        </HStack>
      </Show>

      <HStack>
        <FaCartShopping color={colors.mainColor1} size={20} />
        <Box ml={1}>
          <ImSearch color={colors.mainColor1} size={15} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default NavBar;
