import { Box } from "@chakra-ui/react";
import PopularFood from "../components/PopularFood";
import Slide from "../components/Slide";
import colors from "../assets/colors/colors";
import Offers from "../components/Offers";

const HomePage = () => {
  return (
    <>
      <Box backgroundColor={colors.beige}>
        <Slide />
        <PopularFood />
        <Offers />
      </Box>
    </>
  );
};

export default HomePage;
