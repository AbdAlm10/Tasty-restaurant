import { Box } from "@chakra-ui/react";
import PopularFood from "../components/PopularFood";
import Slide from "../components/Slide";
import colors from "../assets/colors/colors";
import Offers from "../components/Offers";
import OurTeam from "../components/OurTeam";
import FoodMenuSection from "../components/FoodMenu/FoodMenuSection";
import Rating from "../components/Rating";
import BlogSection from "../components/BlogSection";
import Gallery from "../components/Gallery";

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
        <BlogSection />
        <Gallery />
      </Box>
    </>
  );
};

export default HomePage;
