import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import colors from "../assets/colors/colors";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const ContactUsContainer = ({ icon, title, description }: Props) => {
  return (
    <Card
      borderRadius="30px"
      bg="white"
      h="100%"
      border="1px solid"
      borderColor={colors.mainYello}
    >
      <CardBody alignItems="center" textAlign="center">
        <Center>
          <Box
            border="1px solid"
            borderColor={colors.mainBrown}
            justifyContent="center"
            alignItems="center"
            display="flex"
            h="50px"
            borderRadius="20px"
            w="50px"
            p={2}
            bg={colors.beige}
          >
            {icon}
          </Box>
        </Center>
        <VStack my={5}>
          <Heading
            maxW={{ base: "auto", lg: "170px" }}
            fontSize="25"
            color={colors.black}
          >
            {title}
          </Heading>
          <Text color="gray">{description}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ContactUsContainer;
