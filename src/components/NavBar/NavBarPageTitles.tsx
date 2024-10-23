import { Text } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";

interface Props {
  children: string;
}

const NavBarPageTitles = ({ children }: Props) => {
  return (
    <Text ml={4} color={colors.mainColor1} whiteSpace="nowrap" fontWeight="700">
      {children}
    </Text>
  );
};

export default NavBarPageTitles;
