import { Box } from "@chakra-ui/react";
import PopularFood from "../components/PopularFood";
import Slide from "../components/Slide";
import colors from "../assets/colors/colors";
import CountDown from "../components/CountDown";

const HomePage = () => {
  return (
    <>
      <Box backgroundColor={colors.beige}>
        <Slide />
        <PopularFood />
        <CountDown />
      </Box>
    </>
  );
};

export default HomePage;
