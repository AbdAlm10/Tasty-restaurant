import {
  Image,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import { FaHeart } from "react-icons/fa6";
import foodItems from "../data/FoodItems";
import OrderButton from "./OrderButton";
import useLike from "../hooks/useLike";

const PopularFood = () => {
  const { toggleLike, likedItems } = useLike();

  return (
    <VStack my={20}>
      <VStack fontWeight="bold" fontSize={20}>
        <Text color={colors.mainYello}>Best Food</Text>
        <Heading color={colors.black}>Popular Food Items</Heading>
      </VStack>

      {/* Create two rows if there are more than four items */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }} // 4 items per row on large screens
        spacing={{ base: 0, md: 5 }}
      >
        {foodItems.slice(0, 4).map((item, index) => (
          <Card key={index} my={{ base: 5, md: 3, lg: 10 }}>
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              height="200px"
            >
              <Image src={item.src} boxSize={40} />
              <Box mt="6" fontWeight="600">
                <Heading fontSize={20}>{item.title}</Heading>
                <Box mt={2}>
                  <Text color="gray">{item.description}</Text>
                  <Text fontWeight="700" fontSize={20} color={colors.mainYello}>
                    {item.price}
                  </Text>
                </Box>
              </Box>
            </CardBody>
            <CardFooter mt={-5}>
              <ButtonGroup>
                <OrderButton color={colors.black} hover="none" />
                <Button
                  color={likedItems[index] ? colors.mainYello : colors.black}
                  onClick={() => toggleLike(index)}
                >
                  <FaHeart />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default PopularFood;
