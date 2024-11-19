import { Box, Hide, HStack, Image, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import colors from "../../assets/colors/colors";
import logo from "../../assets/images/Logo.webp";
import Store from "../../store";
import NavBarPageTitles from "../NavBar/NavBarPageTitles";
import SearchingCard from "../SearchingCard";
import ShoppingCard from "../ShoppingCard";
import NavbarDrawer from "./Drawer/NavbarDrawer";

export const handleClick = () => {
  const section = document.getElementById("food-menu");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => {
  const itemsTotal = Store((state) => state.itemsTotal);
  const setSearchText = Store((state) => state.searchFoods);

  return (
    <Headroom>
      <HStack
        bg="white"
        justifyContent="space-between"
        p={3}
        style={{
          backdropFilter: "blur(20px)",
          transition: "backdrop-filter 0.3s ease, background-color 0.3s ease",
        }}
        className="headroom--unpinned"
        sx={{
          "&.headroom--unpinned": {
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          },
        }}
      >
        <Hide above="md">
          <NavbarDrawer />
        </Hide>
        <Image
          ml={{ base: 0, md: "50px" }}
          src={logo}
          alt="Logo"
          w={{ base: "75px", md: "70px" }}
          h={{ base: "40px", md: "45px" }}
        />

        <Show above="md">
          <HStack spacing={{ md: 5, lg: 10 }}>
            <Link to={"/"}>
              <NavBarPageTitles title={"Home"} />
            </Link>

            <NavBarPageTitles
              title={"Food Menu"}
              onClick={() => handleClick()}
            />

            <Link to={"LatestBlog/"}>
              <NavBarPageTitles title={"Latest Blog"} />
            </Link>
            <Link to={"Contact/"}>
              <NavBarPageTitles title={"Contact"} />
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
            <SearchingCard onSearch={setSearchText} />
          </Box>
        </HStack>
      </HStack>
    </Headroom>
  );
};

export default NavBar;
