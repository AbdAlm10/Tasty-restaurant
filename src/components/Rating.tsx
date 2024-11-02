import { Box, Button, Text } from "@chakra-ui/react";
import image from "../assets/images/background2.webp";
import colors from "../assets/colors/colors";

const Rating = () => {
  return (
    <Box
      w="100%"
      h={{ base: "650px", md: "800px", lg: "550px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={image}
      backgroundSize="cover"
      p={{ base: 5, lg: 10 }}
    >
      <Button>Click</Button>
      <Box
        borderTop="2px"
        borderTopColor={colors.mainYello}
        w="700px"
        h="400px"
        p={5}
        borderRadius="20px"
        bg={colors.beige}
      >
        <Text>sd</Text>
      </Box>
      <Button>Click</Button>
    </Box>
  );
};

export default Rating;
