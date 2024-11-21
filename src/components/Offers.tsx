import { Box, Image, SimpleGrid, GridItem } from "@chakra-ui/react";
import image from "../assets/images/countDownBG.png";
import timerThumb from "../assets/images/timerThumb.png";
import CountDown from "./CountDown";
import OrderButton from "./OrderButton";
import colors from "../assets/colors/colors";

const Offers: React.FC = () => {
  const targetDate = new Date("2026-11-31T23:59:59");

  return (
    <Box
      display="flex"
      justifyContent="center"
      backgroundImage={image}
      backgroundSize="cover"
      p={{ base: 5, lg: 10 }}
    >
      <SimpleGrid alignItems="center" columns={{ md: 1, lg: 2 }}>
        <GridItem justifyContent="center" display="flex">
          <Box boxSize={{ base: 300, md: 400, lg: 500 }}>
            <Image alt="Food image" src={timerThumb} />
          </Box>
        </GridItem>

        <GridItem>
          <CountDown date={targetDate} />
          <Box justifySelf="center" my={7} ml={{ base: 0, lg: 8 }}>
            <OrderButton
              BG={colors.mainYello}
              color="white"
              width="200px"
              active={{ bg: colors.mainYello }}
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Offers;
