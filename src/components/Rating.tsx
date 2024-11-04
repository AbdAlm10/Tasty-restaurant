import { Box, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import CommentsContainer from "./CommentsContainer";
import SectionsTitle from "./SectionsTitle";

const Rating = () => {
  return (
    <VStack alignItems="center" justifyContent="center" p={{ base: 5, lg: 10 }}>
      <Box bg={colors.beige} borderRadius="20px" p={5}>
        <SectionsTitle
          title={"Testimonials"}
          description={"What our Clients Say"}
        />
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
        <GridItem>
          <CommentsContainer
            text={
              "Absolutely loved the food! Every dish was a delight, and the service was fantastic. Will definitely be coming back!"
            }
            name={"James Miller"}
            userName={"@jamesmiller88"}
            userImageSrc={""}
          />
        </GridItem>
        <GridItem>
          <CommentsContainer
            text={
              "The perfect spot for a cozy dinner. Delicious food, friendly staff, and a great atmosphere!"
            }
            name={"David Lopez"}
            userName={"@davidlopez34"}
            userImageSrc={""}
          />
        </GridItem>
        <GridItem>
          <CommentsContainer
            text={
              "Amazing flavors and quick service! One of the best dining experiences I've had in a long time."
            }
            name={"Alex Chen"}
            userName={"@alexchen91"}
            userImageSrc={""}
          />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Rating;
