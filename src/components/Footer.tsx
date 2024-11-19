import {
  Box,
  Divider,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import colors from "../assets/colors/colors";
import logo from "../assets/images/Logo.webp";
import FooterInfoContainer from "./FooterInfoContainer";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <VStack bg="white" h="450px" p={10}>
      <Box justifyContent="center" display="flex">
        <SimpleGrid
          spacing={{ base: 5, md: 10, lg: 20 }}
          alignItems="center"
          justifyContent="center"
          p={5}
          columns={{ base: 1, md: 3, lg: 3 }}
          borderRadius="20px"
          bg={colors.mainYello}
          w={{ base: "80%", md: "90%", lg: "100%" }}
          h={"auto"}
        >
          <GridItem>
            <FooterInfoContainer
              text={"address"}
              heading={"4648 Rocky Road Philadelphia"}
              children={<MdPlace color="white" size={30} />}
            />
          </GridItem>
          <GridItem>
            <FooterInfoContainer
              text={"address"}
              heading={"4648 Rocky Road Philadelphia"}
              children={<MdEmail color="white" size={30} />}
            />
          </GridItem>
          <GridItem>
            <FooterInfoContainer
              text={"call emergency"}
              heading={"+88 0123 654 99"}
              children={<IoCall color="white" size={30} />}
            />
          </GridItem>
        </SimpleGrid>
      </Box>
      <HStack color={colors.black} my={10}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={10}>
          <GridItem>
            <Box>
              <Box>
                <Image src={logo} w="150px" h="100px" />
              </Box>
              <Text fontWeight="500" my={3} fontSize="15px" maxW="250px">
                The best restaurant that combines civilization and ancient
                times, as it serves ancient food and also cares about keeping up
                with the times.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <FooterLinks
              title={"Quick Links"}
              links={
                <>
                  <Link to={"/FoodMenu/"}>Food Menu</Link>
                  <Link to={"/LatestBlog/"}>Latest Blog</Link>
                  <Link to={"/Contact/"}>Contact</Link>
                </>
              }
            />
          </GridItem>
          <GridItem>
            <FooterLinks
              title={"Our Menu"}
              links={
                <>
                  <Link to={"/FoodMenu/"}>Burger</Link>
                  <Link to={"/FoodMenu/"}>Kentucky crispy</Link>
                  <Link to={"/FoodMenu/"}>Grilled chicken</Link>
                  <Link to={"/FoodMenu/"}>Italian Seasons Pizza</Link>
                  <Link to={"/FoodMenu/"}>Italian Pasta</Link>
                </>
              }
            />
          </GridItem>
          <GridItem>
            <FooterLinks
              title={"Contact Us"}
              links={
                <>
                  <Box my={3} fontWeight="500">
                    <Text>Monday - Friday: 8am - 4pm</Text>
                    <Text>Saturday: 8am - 12am</Text>
                  </Box>

                  <HStack>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <MdEmail color="gray.300" />
                      </InputLeftElement>
                      <Input type="tel" placeholder="Your Email adress" />
                    </InputGroup>
                    <Link to="/Contact/">
                      <FaArrowAltCircleRight />
                    </Link>
                  </HStack>
                </>
              }
            />
          </GridItem>
        </SimpleGrid>
      </HStack>
      <Divider orientation="horizontal" />

      <HStack p={1}>
        <Text color="gray">
          Copyright © 2024 Tasty Inc. All rights reserved.
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
