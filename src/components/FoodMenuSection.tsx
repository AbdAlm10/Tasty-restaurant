import {
  Box,
  Stack,
  VStack,
  Text,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Divider,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import FastFoodIcon from "../assets/images/FastFoodIcon.png";
import DrinkIcon from "../assets/images/DrinkIcon.png";
import PizzaIcon from "../assets/images/PizzaIcon.png";
import PastaIcon from "../assets/images/PastaIcon.png";

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
            <Tab _selected={{ color: colors.mainYello }}>
              <Image src={FastFoodIcon} />
              <Text fontSize={20} fontWeight={500} mx={3}>
                Fast Food
              </Text>
            </Tab>
            <Divider orientation="vertical" />
            <Tab>
              <Image src={DrinkIcon} />
              <Text fontSize={20} fontWeight={500} mx={3}>
                Drinks
              </Text>
            </Tab>
            <Divider orientation="vertical" />
            <Tab>
              <Image src={PizzaIcon} />
              <Text fontSize={20} fontWeight={500} mx={3}>
                Pizza
              </Text>
            </Tab>
            <Divider orientation="vertical" />
            <Tab>
              <Image src={PastaIcon} />
              <Text fontSize={20} fontWeight={500} mx={3}>
                fresh pizza
              </Text>
            </Tab>
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
