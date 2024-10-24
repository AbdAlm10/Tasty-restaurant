import { Box, Hide, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../../assets/images/Restaurant.webp";
import { FaCartShopping } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import colors from "../../assets/colors/colors";
import NavBarPageTitles from "../NavBar/NavBarPageTitles";
import NavbarDrawer from "./Drawer/NavbarDrawer";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack bg="white" justifyContent="space-between" p={3}>
      <Hide above="md">
        <NavbarDrawer />
      </Hide>
      <Image
        ml={{ base: 0, md: "100px" }}
        src={logo}
        alt="Logo"
        w={{ base: "75px", md: "100px" }}
        h={{ base: "40px", md: "55px" }}
      />

      <Show above="md">
        <HStack spacing={10}>
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

      <HStack spacing={6} mr={{ base: 0, md: "50px" }}>
        <FaCartShopping color={colors.mainBrown} size={20} />
        <Box>
          <ImSearch color={colors.mainBrown} size={15} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default NavBar;
