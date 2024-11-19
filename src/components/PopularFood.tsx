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
import Store, { CartItem } from "../store";
import style from "../GenralStyle";

const PopularFood = () => {
  const { toggleLike, likedItems } = useLike();
  const addToCart = Store((state) => state.addToCart);
  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
  };

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
          <Card
            key={index}
            my={{ base: 5, md: 3, lg: 10 }}
            borderRadius={style.radius.smallRadius}
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              height="200px"
            >
              <Image src={item.src} boxSize={style.image.bigImage} />
              <Box mt="6">
                <Heading fontSize={style.text.midText}>{item.title}</Heading>
                <Box mt={2}>
                  <Text color="gray">{item.description}</Text>
                  <Text
                    fontWeight={style.Weight.dark}
                    fontSize={style.text.midText}
                    color={colors.mainYello}
                  >
                    {item.price}
                  </Text>
                </Box>
              </Box>
            </CardBody>
            <CardFooter mt={-5}>
              <ButtonGroup>
                <Button
                  onClick={() =>
                    handleAddToCart({
                      image: item.src,
                      FoodName: item.title,
                      price: parseFloat(item.price),
                      quantity: 1,
                    })
                  }
                >
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
