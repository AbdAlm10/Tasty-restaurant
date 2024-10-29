import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Chefs from "../data/Chefs";

const OurTeam = () => {
  return (
    <Box>
      <VStack textAlign="center" mt={20} fontWeight="bold" fontSize={20}>
        <Text color={colors.mainYello}>Our Chefe</Text>
        <Heading color={colors.black}>Meet Our Expert Chefe</Heading>
      </VStack>

      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 0, md: 5, lg: 10 }}
        >
          {Chefs.map((chef, index) => (
            <Card
              key={index}
              textAlign="center"
              borderRadius="20px"
              my={{ base: 5, md: 3, lg: 10 }}
            >
              <CardBody p={0}>
                <VStack spacing={2} my="6" fontWeight="600">
                  <Heading color={colors.black} fontSize={20}>
                    {chef.name}
                  </Heading>
                  <Text color="gray">{chef.role}</Text>

                  <ButtonGroup>
                    <Button p={0} bg="none">
                      <FaLinkedinIn color={colors.mainYello} />
                    </Button>

                    <Button p={0} ml="0" bg="none">
                      <FaFacebookF color={colors.mainYello} />
                    </Button>
                  </ButtonGroup>
                </VStack>
                <Image boxSize={300} src={chef.imageSrc} />
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default OurTeam;
