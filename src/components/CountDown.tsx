import { Box, Heading, Text } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import useCountDown from "../hooks/useCountDown";

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
      borderRadius="30px"
    >
      <Text color={colors.mainYello} fontWeight="500">
        Special Offer
      </Text>
      <Heading color={colors.black} my={3}>
        Get 30% Discount Every Item
      </Heading>
      {countdown}
    </Box>
  );
};

export default CountDown;
