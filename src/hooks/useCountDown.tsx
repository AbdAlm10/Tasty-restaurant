import { useEffect, useState } from "react";
import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import Countdown, { CountdownRendererFn } from "react-countdown";

const useCountDown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const renderer: CountdownRendererFn = ({
      days,
      hours,
      minutes,
      seconds,
    }) => (
      <HStack mt={5} fontWeight="bold" fontSize="20px" justifyContent="center">
        <Box p={1} bg={colors.mainYello} color="white">
          <Text>{days}</Text>
          <Divider />
          <Text>days</Text>
        </Box>
        <Box p={1} bg={colors.mainYello} color="white">
          <Text>{hours}</Text>
          <Divider />
          <Text>hrs</Text>
        </Box>
        <Box p={1} bg={colors.mainYello} color="white">
          <Text>{minutes}</Text>
          <Divider />
          <Text>Mins</Text>
        </Box>
        <Box p={1} bg={colors.mainYello} color="white">
          <Text>{seconds}</Text>
          <Divider />
          <Text>secs</Text>
        </Box>
      </HStack>
    );

    setCountdown(<Countdown date={targetDate} renderer={renderer} />);
  }, [targetDate]);

  return countdown;
};

export default useCountDown;
