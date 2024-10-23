import { Box } from "@chakra-ui/react";
import PopularFood from "../components/PopularFood";
import Slide from "../components/Slide";

const HomePage = () => {
  return (
    <>
      <Box backgroundColor="#f4f1ea">
        <Slide />
        <PopularFood />
      </Box>
    </>
  );
};

export default HomePage;
