import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title?: string;
  color?: string;
  children?: ReactNode;
}

const CustomizableButton = ({ ...style }: Props) => {
  return (
    <Button borderRadius="20px" p={0} color={style.color} bg="none">
      {style.children}
    </Button>
  );
};

export default CustomizableButton;
