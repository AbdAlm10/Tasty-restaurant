import { HStack, VStack, Heading, Image, Text } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";

interface MealItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

interface Props {
  item: MealItem;
}

const MealContainer = ({ item }: Props) => (
  <HStack justifyContent="space-between" w={{ base: "100%", md: "auto" }}>
    <HStack>
      <Image borderRadius="50%" boxSize="90px" src={item.src} />
      <VStack alignItems="start" ml="3" spacing={0}>
        <Heading color={colors.black} fontSize={{ base: 15, lg: 20 }}>
          {item.title}
        </Heading>
        <Text color={colors.black} fontSize={15} fontWeight="400">
          {item.description}
        </Text>
      </VStack>
    </HStack>
    <Text fontSize={20} ml={3} fontWeight="bold" color={colors.mainBrown}>
      {item.price}
    </Text>
  </HStack>
);

export default MealContainer;
