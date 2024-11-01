import { SimpleGrid } from "@chakra-ui/react";
import foodItems from "../../data/FoodItems";
import MealContainer from "./MealContainer";

interface Props {
  typeName: string;
}

const Meal = ({ typeName }: Props) => {
  const sortedFood = foodItems.filter((item) => item.type === typeName);

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mt={10}>
      {sortedFood.map((item, index) => (
        <MealContainer key={index} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default Meal;
