import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Chefs from "../data/Chefs";
import CustomizableButton from "./CustomizableButton";
import SectionsTitle from "./SectionsTitle";

const OurTeam = () => {
  return (
    <Box>
      <SectionsTitle
        marginTop={10}
        title="Our Chefe"
        description="Meet Our Expert Chefe"
      />

      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 0, md: 5, lg: 10 }}
        >
          {Chefs.map((chef, index) => (
            <Card
              overflow="hidden"
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

                  {/* Social media buttons*/}
                  <HStack spacing={0}>
                    <CustomizableButton>
                      <FaLinkedinIn color={colors.mainYello} />
                    </CustomizableButton>
                    <CustomizableButton color={colors.mainYello}>
                      <FaFacebookF />
                    </CustomizableButton>
                  </HStack>
                </VStack>

                {/* Chefs images*/}
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
