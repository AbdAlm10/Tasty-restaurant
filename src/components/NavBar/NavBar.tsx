import { Box, Hide, HStack, Image, Show, Text } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import colors from "../../assets/colors/colors";
import logo from "../../assets/images/Logo.webp";
import NavBarPageTitles from "../NavBar/NavBarPageTitles";
import ShoppingCard from "../ShoppingCard"; // No need to pass cartItems prop here
import NavbarDrawer from "./Drawer/NavbarDrawer";
import Store from "../../store";

const NavBar = () => {
  const itemsTotal = Store((state) => state.itemsTotal);

  return (
    <HStack bg="white" justifyContent="space-between" p={3}>
      <Hide above="md">
        <NavbarDrawer />
      </Hide>
      <Image
        ml={{ base: 0, md: "50px" }}
        src={logo}
        alt="Logo"
        w={{ base: "75px", md: "100px" }}
        h={{ base: "40px", md: "55px" }}
      />

      <Show above="md">
        <HStack spacing={{ md: 5, lg: 10 }}>
          <Link to={"/"}>
            <NavBarPageTitles>Home</NavBarPageTitles>
          </Link>
          <Link to={"FoodMenu/"}>
            <NavBarPageTitles>Food Menu</NavBarPageTitles>
          </Link>
          <Link to={"LatestBlog/"}>
            <NavBarPageTitles>Latest Blog</NavBarPageTitles>
          </Link>
          <Link to={"Contact/"}>
            <NavBarPageTitles>Contact</NavBarPageTitles>
          </Link>
        </HStack>
      </Show>

      <HStack spacing={8} mr={{ base: 0, md: "25px" }}>
        <ShoppingCard />
        {itemsTotal > 0 && (
          <Box
            bg={colors.mainYello}
            borderRadius="100%"
            position="absolute"
            ml={5}
            mb={5}
            w={5}
            h={5}
            p={0.3}
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="xs" fontWeight="bold" color="white">
              {itemsTotal}
            </Text>
          </Box>
        )}

        <Box>
          <ImSearch color={colors.mainBrown} size={15} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default NavBar;
