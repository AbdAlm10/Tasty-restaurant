import { Box, Text } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";

interface Props {
  title: string;
  onClick?: () => void;
}

const NavBarPageTitles = ({ title, onClick }: Props) => {
  return (
    <Box onClick={onClick}>
      <Text
        ml={4}
        color={colors.mainBrown}
        whiteSpace="nowrap"
        fontWeight="700"
      >
        {title}
      </Text>
    </Box>
  );
};

export default NavBarPageTitles;
