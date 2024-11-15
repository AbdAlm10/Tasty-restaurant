import { Box, Text } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";

interface Props {
  children: string;
  onClick?: () => void;
}

const NavBarPageTitles = ({ children, onClick }: Props) => {
  return (
    <Box onClick={onClick}>
      <Text
        ml={4}
        color={colors.mainBrown}
        whiteSpace="nowrap"
        fontWeight="700"
      >
        {children}
      </Text>
    </Box>
  );
};

export default NavBarPageTitles;
