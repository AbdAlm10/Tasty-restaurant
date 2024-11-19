import { Box } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import useCountDown from "../hooks/useCountDown";
import SectionsTitle from "./SectionsTitle";
import style from "../GenralStyle";

interface CountDownProps {
  date: Date;
}

const CountDown: React.FC<CountDownProps> = ({ date }) => {
  const countdown = useCountDown(date);

  return (
    <Box
      ml={{ lg: 10 }}
      p={5}
      alignItems="center"
      textAlign="center"
      bg={colors.beige}
      maxW="500px"
      h="250px"
      borderRadius={style.radius.largeRadius}
    >
      <SectionsTitle
        title="Special Offer"
        description="Get 30% Discount Every Item"
      />
      {countdown}
    </Box>
  );
};

export default CountDown;
