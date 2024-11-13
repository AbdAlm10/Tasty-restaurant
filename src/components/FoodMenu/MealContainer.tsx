import { HStack, VStack, Heading, Image, Text, Button } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";
import Store, { CartItem } from "../../store";

interface MealItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

interface Props {
  item: MealItem;
}

const MealContainer = ({ item }: Props) => {
  const addToCart = Store((state) => state.addToCart);

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
  };
  return (
    <HStack justifyContent="space-between" w={{ base: "100%", md: "auto" }}>
      <HStack>
        <Image borderRadius="25%" boxSize="100px" src={item.src} />
        <VStack alignItems="start" ml="3" spacing={0}>
          <Heading color={colors.black} fontSize={{ base: 15, lg: 20 }}>
            {item.title}
          </Heading>
          <Text color={colors.black} fontSize={15} fontWeight="400">
            {item.description}
          </Text>
        </VStack>
      </HStack>
      <VStack>
        <Text fontSize={20} ml={3} fontWeight="bold" color={colors.mainBrown}>
          {item.price}
        </Text>
        <Button
          bg={colors.mainYello}
          p={2}
          color={"white"}
          onClick={() =>
            handleAddToCart({
              image: item.src,
              FoodName: item.title,
              price: parseInt(item.price),
              quantity: 1,
            })
          }
        >
          Add to card
        </Button>
      </VStack>
    </HStack>
  );
};

export default MealContainer;
