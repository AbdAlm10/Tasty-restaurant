import {
  Box,
  Center,
  Divider,
  Heading,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import colors from "../../assets/colors/colors";
import DrinkIcon from "../../assets/images/DrinkIcon.png";
import FastFoodIcon from "../../assets/images/FastFoodIcon.png";
import PastaIcon from "../../assets/images/PastaIcon.png";
import PizzaIcon from "../../assets/images/PizzaIcon.png";
import FoodMenuTap from "./FoodMenuTap";
import Meal from "./Meal";

const FoodMenuSection = () => (
  <Box bg={colors.beige} p={5}>
    <Center>
      <VStack
        maxH="800px"
        w={{ base: "95%", md: "80%" }}
        alignItems="normal"
        bg="white"
        borderRadius={20}
        p={{ base: 5, lg: 10 }}
      >
        <Stack fontWeight="bold" fontSize={20} textAlign="center">
          <Text color={colors.mainYello}>Food Menu</Text>
          <Heading color={colors.black}>Fresheat Foods Menu</Heading>
        </Stack>

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