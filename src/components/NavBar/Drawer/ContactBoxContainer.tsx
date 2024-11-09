import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePlace } from "react-icons/md";
import colors from "../../../assets/colors/colors";
import OrderButton from "../../OrderButton";

const ContactBoxContainer = () => {
  return (
    <Box>
      <Heading mb={4} fontSize={20}>
        Contact Info
      </Heading>

      <HStack mb={4}>
        <MdOutlinePlace color={colors.mainYello} />
        <Text>Main Street, Melbourne, Australia</Text>
      </HStack>

      <HStack mb={4}>
        <MdOutlineEmail color={colors.mainYello} />
        <Text>info@fresheat.com</Text>
      </HStack>

      <HStack mb={4}>
        <LuClock4 color={colors.mainYello} />
        <Text>Mod-friday, 09am -05pm</Text>
      </HStack>

      <HStack mb={4}>
        <FiPhone color={colors.mainYello} />
        <Text>+11002345909</Text>
      </HStack>

      <OrderButton width={"100%"} BG={colors.mainYello} color="white" />
    </Box>
  );
};

export default ContactBoxContainer;
