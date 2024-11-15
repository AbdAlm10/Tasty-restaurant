import { Box } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import BlogSection from "../components/BlogSection";
import FoodMenuSection from "../components/FoodMenu/FoodMenuSection";
import Gallery from "../components/Gallery";
import Offers from "../components/Offers";
import OurTeam from "../components/OurTeam";
import PopularFood from "../components/PopularFood";
import Rating from "../components/Rating";
import Slide from "../components/Slide";

const HomePage = () => {
  return (
    <>
      <Box backgroundColor={colors.beige}>
        <Slide />
        <PopularFood />
        <Offers />
        <OurTeam />
        <FoodMenuSection />
        <Rating />
        <BlogSection itmes={3} />
        <Gallery />
      </Box>
    </>
  );
};

export default HomePage;
