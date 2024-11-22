import {
  HStack,
  VStack,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
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
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={10}
      justifyContent="space-between"
      display="flex"
      alignItems="center"
      w={{ base: "100%", md: "auto" }}
    >
      <GridItem>
        <HStack>
          <Image
            borderRadius="25%"
            boxSize={{ base: "60px", md: "100px" }}
            src={item.src}
          />
          <VStack alignItems="start" ml={{ base: 1, md: 3 }} spacing={0}>
            <Heading color={colors.black} fontSize={{ base: 15, lg: 20 }}>
              {item.title}
            </Heading>
            <Text color={colors.black} fontSize={15} fontWeight="400">
              {item.description}
            </Text>
          </VStack>
        </HStack>
      </GridItem>

      <GridItem>
        <VStack alignItems="center">
          <Text fontSize={20} fontWeight="bold" color={colors.mainBrown}>
            {item.price}
          </Text>
          <Button
            _hover={{ bg: colors.mainYello }}
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
            Add
          </Button>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default MealContainer;
