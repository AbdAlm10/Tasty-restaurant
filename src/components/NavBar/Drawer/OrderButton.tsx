import { Box, Button, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
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
        _hover={style.hover}
        _active={style.active}
        color={style.color}
        bg={style.BG}
        w={style.width}
      >
        <FiShoppingCart />
        <Text ml={3}>Order now</Text>
      </Button>
    </Box>
  );
};

export default OrderButton;
