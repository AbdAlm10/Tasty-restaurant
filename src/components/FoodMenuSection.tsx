import {
  Box,
  Heading,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import DrinkIcon from "../assets/images/DrinkIcon.png";
import FastFoodIcon from "../assets/images/FastFoodIcon.png";
import PastaIcon from "../assets/images/PastaIcon.png";
import PizzaIcon from "../assets/images/PizzaIcon.png";
import FoodMenuTap from "./FoodMenuTap";

const FoodMenuSection = () => {
  return (
    <Box bg={colors.beige} p={5}>
      <VStack bg="white" borderRadius={20} p={{ base: 10, lg: 20 }}>
        <Stack fontWeight="bold" fontSize={20} textAlign="center">
          <Text color={colors.mainYello}>Food Menu</Text>
          <Heading color={colors.black}>Fresheat Foods Menu</Heading>
        </Stack>

        <Tabs my={3} variant="unstyled" color={colors.black}>
          <TabList display={{ base: "block", md: "flex" }}>
            <FoodMenuTap imageSrc={FastFoodIcon} title="Fast Food" />
            <FoodMenuTap imageSrc={DrinkIcon} title="Drinks" />
            <FoodMenuTap imageSrc={PizzaIcon} title="Pizza" />
            <FoodMenuTap imageSrc={PastaIcon} title="Fresh Pizza" />
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default FoodMenuSection;
