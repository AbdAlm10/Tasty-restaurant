import { Box, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import CommentsContainer from "./CommentsContainer";
import SectionsTitle from "./SectionsTitle";
import Users from "../data/Users";

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
        {Users.map((user, index) => (
          <GridItem key={index}>
            <CommentsContainer
              text={user.text}
              name={user.name}
              userName={user.userName}
              userImageSrc={user.imageSrc}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Rating;
