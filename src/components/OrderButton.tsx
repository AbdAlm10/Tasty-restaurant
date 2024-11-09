import { Box, Button, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

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
        _hover={style.hover}
        _active={style.active}
        color={style.color}
        bg={style.BG}
        w={style.width}
      >
        <FaCartShopping />
        <Text ml={3}>Add to cart</Text>
      </Button>
    </Box>
  );
};

export default OrderButton;
