import { Box, Button, Center, Heading, HStack, Text } from "@chakra-ui/react";
import { FiPhone, FiShoppingCart } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePlace } from "react-icons/md";
import colors from "../../../assets/colors/colors";

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
        <Button
          _hover={"none"}
          _active={{ bg: "#773200" }}
          bg={colors.mainColor2}
          color="white"
          w="100%"
          mt={2}
        >
          <FiShoppingCart />
          <Text ml={3}>Order now</Text>
        </Button>
      </Center>
    </Box>
  );
};

export default ContactBoxContainer;
