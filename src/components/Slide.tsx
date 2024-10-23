import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import image from "../assets/images/HeroBackground.jpeg";
import burgar from "../assets/images/burgar.png";
import pizza from "../assets/images/pizza.png";
import rize from "../assets/images/rize.png";
import colors from "../assets/colors/colors";
import OrderButton from "./NavBar/Drawer/OrderButton";
import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const slider = [
    { src: pizza, text: "Seasons Pizza Italian Style" },
    { src: burgar, text: "Burger King with multiple toppings" },
    { src: rize, text: "Arabic steamed rice dish" },
  ];

  // Fade-in animation for the images and text
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 }, // Fade animation duration (1 second)
  });

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="auto"
      h="600px"
      backgroundImage={image}
      backgroundSize="cover"
    >
      <animated.div style={props}>
        <Flex p={10} justify="space-between" align="center">
          <Center>
            <Box ml={3}>
              <Text
                fontSize={20}
                fontWeight={500}
                color={colors.mainColor2}
                mb={4}
              >
                Welcome to our restaurant
              </Text>
              <Heading
                color={colors.mainColor1}
                fontSize={{ base: 70, md: 85, lg: 95 }}
              >
                {slider[index].text}
              </Heading>
              <Box display="inline-block" mt={5}>
                <OrderButton />
              </Box>
            </Box>
          </Center>

          <Show above="lg">
            <Image
              src={slider[index].src}
              h="410px"
              my={20}
              mx={10}
              alt="Food image"
            />
          </Show>
        </Flex>
      </animated.div>
    </Box>
  );
};

export default Slide;
