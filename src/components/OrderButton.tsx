import { Box, Button, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { handleClick } from "./NavBar/NavBar";

interface Props {
  width?: string;
  hover?: string;
  active?: any;
  BG?: string;
  color?: string;
}

const OrderButton = ({ ...style }: Props) => {
  return (
    <Box>
      <Button
        onClick={handleClick}
        _hover={{ bg: style.BG }}
        _active={{ bg: style.BG }}
        color={style.color}
        bg={style.BG}
        w={style.width}
      >
        <FaCartShopping />
        <Text ml={3}>Order now</Text>
      </Button>
    </Box>
  );
};

export default OrderButton;
