import { Box, Button, Center, Heading, HStack, Text } from "@chakra-ui/react";
import { FiPhone, FiShoppingCart } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePlace } from "react-icons/md";
import colors from "../../../assets/colors/colors";
import { Link } from "react-router-dom";

const ContactBoxContainer = () => {
  return (
    <Box>
      <Heading mb={4} fontSize={20}>
        Contact Info
      </Heading>

      <HStack mb={4}>
        <MdOutlinePlace color={colors.mainColor2} />
        <Text>Main Street, Melbourne, Australia</Text>
      </HStack>

      <HStack mb={4}>
        <MdOutlineEmail color={colors.mainColor2} />
        <Text>info@fresheat.com</Text>
      </HStack>

      <HStack mb={4}>
        <LuClock4 color={colors.mainColor2} />
        <Text>Mod-friday, 09am -05pm</Text>
      </HStack>

      <HStack mb={4}>
        <FiPhone color={colors.mainColor2} />
        <Text>+11002345909</Text>
      </HStack>

      <Center>
        <Box w="100%">
          <Link to={"FoodMenu/"}>
            <Button
              _hover={"none"}
              _active={{ bg: "#773200" }}
              bg={colors.mainColor2}
              color="white"
              mt={2}
              w="100%"
            >
              <FiShoppingCart />
              <Text ml={3}>Order now</Text>
            </Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactBoxContainer;
