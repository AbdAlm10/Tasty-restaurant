import { GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import Users from "../data/Users";
import CommentsContainer from "./CommentsContainer";
import SectionsTitle from "./SectionsTitle";

const Rating = () => {
  return (
    <VStack alignItems="center" justifyContent="center" p={{ base: 5, lg: 10 }}>
      <SectionsTitle
        marginTop={10}
        title={"Testimonials"}
        description={"What our Clients Say"}
      />

      <SimpleGrid my={5} columns={{ base: 1, lg: 3 }} spacing={5}>
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
