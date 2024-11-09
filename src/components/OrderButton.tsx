import { Box, Button, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Props {
  width?: string;
  hover?: string;
  active?: any;
  BG?: string;
  color?: string;
}

const OrderButton = ({ ...style }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("FoodMenu/");
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        _hover={{ bg: style.BG }}
        _active={style.active}
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
