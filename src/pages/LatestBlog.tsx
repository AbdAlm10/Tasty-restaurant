import { Box } from "@chakra-ui/react";
import BlogSection from "../components/BlogSection";
import colors from "../assets/colors/colors";

const LatestBlog = () => {
  return (
    <Box bg={colors.beige}>
      <BlogSection itmes={10} />
    </Box>
  );
};

export default LatestBlog;
