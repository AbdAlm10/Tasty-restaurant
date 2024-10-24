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
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import foodItems from "../data/FoodItems";

const PopularFood = () => {
  return (
    <VStack my={20}>
      <VStack fontWeight="bold" fontSize={20}>
        <Text color={colors.mainYello}>Best Food</Text>
        <Heading color={colors.black}>Popular Food Items</Heading>
      </VStack>

      <HStack spacing={8}>
        {foodItems.map((item, idx) => (
          <Card key={`duplicate-${idx}`} my={10}>
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
                <Button leftIcon={<FaCartShopping />}>Order Now</Button>
                <Button>
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
