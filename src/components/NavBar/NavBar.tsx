import { Box, Hide, HStack, Image, Show } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import colors from "../../assets/colors/colors";
import logo from "../../assets/images/Logo.webp";
import NavBarPageTitles from "../NavBar/NavBarPageTitles";
import ShoppingCard from "../ShoppingCard";
import NavbarDrawer from "./Drawer/NavbarDrawer";

const NavBar = () => {
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

      <HStack spacing={6} mr={{ base: 0, md: "25px" }}>
        <ShoppingCard />
        <Box>
          <ImSearch color={colors.mainBrown} size={15} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default NavBar;
