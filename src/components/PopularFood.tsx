import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import colors from "../assets/colors/colors";
import foodItems from "../data/FoodItems";
import useLike from "../hooks/useLike";
import SectionsTitle from "./SectionsTitle";

interface Props {
  onAdd: (FoodName: string) => void;
}

const PopularFood = ({ onAdd }: Props) => {
  const { toggleLike, likedItems } = useLike();

  return (
    <VStack>
      <SectionsTitle
        marginTop={10}
        title="Best Food"
        description="Popular Food Items"
      />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
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
                <Button>
                  <FaCartShopping />
                  <Text ml={3}>Add to cart</Text>
                </Button>
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
