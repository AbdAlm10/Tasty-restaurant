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
import burgar from "../assets/images/burgar.png";
import pizza from "../assets/images/pizza.png";
import rize from "../assets/images/rize.png";
import pasta from "../assets/images/pasta.png";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useState } from "react";

const PopularFood = () => {
  const [index, setIndex] = useState(0);
  const FoodCard = [
    { src: burgar, title: "Fresh Royal burger", price: "35$" },
    { src: pizza, title: "Italian Seasons Pizza", price: "60$" },
    { src: rize, title: "Arabic steamed rice", price: "79$" },
    { src: pasta, title: "Italian pasta", price: "50$" },
  ];

  return (
    <>
      <VStack my={20}>
        <VStack fontWeight="bold" fontSize={20}>
          <Text color={colors.mainYello}>Best Food</Text>
          <Heading color={colors.black}>Popular Food Items</Heading>
        </VStack>

        <HStack>
          <Card borderRadius={20} my={10}>
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <Image src={pizza} boxSize={40} />
              <Box mt="6" fontWeight="600">
                <Heading fontSize={20}>Italian Seasons Pizza</Heading>
                <Box mt={2}>
                  <Text color="gray">New Recipe ⚡️</Text>
                  <Text fontWeight="700" fontSize={20} color={colors.mainYello}>
                    20$
                  </Text>
                </Box>
              </Box>
            </CardBody>

            <CardFooter mt={-7}>
              <ButtonGroup>
                <Button color={colors.black} leftIcon={<FaCartShopping />}>
                  Order Now
                </Button>
                <Button>
                  <FaHeart color={colors.black} />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </HStack>
      </VStack>
    </>
  );
};

export default PopularFood;
