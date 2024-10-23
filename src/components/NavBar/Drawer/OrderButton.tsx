import { Center, Box, Button, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import colors from "../../../assets/colors/colors";

interface Props {
  width?: string;
}

const OrderButton = ({ width }: Props) => {
  return (
    <Center>
      <Box w={width}>
        <Link to={"FoodMenu/"}>
          <Button
            _hover={"none"}
            _active={{ bg: "#773200" }}
            bg={colors.mainColor2}
            color="white"
            mt={2}
            w="100%"
          >
            <FiShoppingCart />
            <Text ml={3}>Order now</Text>
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default OrderButton;
