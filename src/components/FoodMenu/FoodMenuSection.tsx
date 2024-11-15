import {
  Box,
  Center,
  Divider,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import colors from "../../assets/colors/colors";
import DrinkIcon from "../../assets/images/Drinks/DrinkIcon.png";
import FastFoodIcon from "../../assets/images/FastFood/FastFoodIcon.png";
import PastaIcon from "../../assets/images/Pasta/PastaIcon.png";
import PizzaIcon from "../../assets/images/Pizza/PizzaIcon.png";
import SectionsTitle from "../SectionsTitle";
import FoodMenuTap from "./FoodMenuTap";
import Meal from "./Meal";

const FoodMenuSection = () => (
  <Box id="food-menu" bg={colors.beige} p={5}>
    <Center>
      <VStack
        w={{ base: "95%", md: "80%" }}
        alignItems="normal"
        bg="white"
        borderRadius={20}
        p={{ base: 5, lg: 10 }}
      >
        <SectionsTitle title="Food Menu" description="Fresheat Foods Menu" />

        <Tabs variant="unstyled" color={colors.black}>
          <Center>
            <TabList my={3} display={{ base: "block", md: "flex" }}>
              <FoodMenuTap imageSrc={FastFoodIcon} title="Fast Food" />
              <FoodMenuTap imageSrc={DrinkIcon} title="Drinks" />
              <FoodMenuTap imageSrc={PizzaIcon} title="Pizza" />
              <FoodMenuTap imageSrc={PastaIcon} title="Fresh Pasta" />
            </TabList>
          </Center>

          <Divider />

          <TabPanels>
            <TabPanel>
              <Meal typeName="Fast Food" />
            </TabPanel>
            <TabPanel>
              <Meal typeName="Drink" />
            </TabPanel>
            <TabPanel>
              <Meal typeName="Pizza" />
            </TabPanel>
            <TabPanel>
              <Meal typeName="Pasta" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  </Box>
);

export default FoodMenuSection;
