import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import colors from "../assets/colors/colors";
import burgar from "../assets/images/FastFood/FastFood1.png";
import rize from "../assets/images/FastFood/FastFood2.png";
import image from "../assets/images/HeroBackground.png";
import pasta from "../assets/images/Pasta/pasta.png";
import pizza from "../assets/images/Pizza/pizza.png";
import OrderButton from "./OrderButton";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const slider = [
    { src: pizza, text: "Seasons Pizza Italian Style" },
    { src: burgar, text: "Burger King with multiple toppings" },
    { src: rize, text: "Arabic steamed rice dish" },
    { src: pasta, text: "Tomato pasta with ment" },
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <Box
      display={{ base: "flex", lg: "block" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      w="auto"
      h={{ base: "400px", md: "500px", lg: "600px" }}
      backgroundImage={image}
      backgroundSize="cover"
    >
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex p={{ base: 5, md: 10 }} justifyContent={"space-between"}>
          <Center>
            <Box ml={"auto"} textAlign="center">
              <Text
                fontSize={20}
                fontWeight={500}
                color={colors.mainYello}
                mb={4}
              >
                Welcome to our restaurant
              </Text>
              <Heading
                maxW="700px"
                whiteSpace="wrap"
                color={"white"}
                fontSize={{ base: 40, md: 60, lg: 65, xl: 80 }}
              >
                {slider[index].text}
              </Heading>
              <Box display="inline-block" mt={7}>
                <OrderButton
                  color="white"
                  BG={colors.mainYello}
                  width="100%"
                  active={{ bg: "#773200" }}
                />
              </Box>
            </Box>
          </Center>

          <Show above="lg">
            <Image
              src={slider[index].src}
              h="400px"
              maxW="450px"
              my={20}
              mx={10}
              alt="Food image"
            />
          </Show>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Slide;
