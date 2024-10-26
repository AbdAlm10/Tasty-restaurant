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
  HStack,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import { FaHeart } from "react-icons/fa6";
import foodItems from "../data/FoodItems";
import { useState } from "react";
import OrderButton from "./NavBar/Drawer/OrderButton";

const PopularFood = () => {
  const [likedItems, setLikedItems] = useState(
    foodItems.map((item) => item.liked)
  );

  const toggleLike = (index: number) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };

  return (
    <VStack my={20}>
      <VStack fontWeight="bold" fontSize={20}>
        <Text color={colors.mainYello}>Best Food</Text>
        <Heading color={colors.black}>Popular Food Items</Heading>
      </VStack>

      <HStack spacing={8}>
        {foodItems.map((item, index) => (
          <Card key={`duplicate-${index}`} my={10}>
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
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
      </HStack>
    </VStack>
  );
};

export default PopularFood;
