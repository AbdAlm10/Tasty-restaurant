import { Text, Box } from "@chakra-ui/react";

interface Props {
  children: string;
  onCLick?: () => void;
}

const DrawerPageName = ({ children, onCLick }: Props) => {
  return (
    <Box onClick={onCLick}>
      <Text
        transition="all 0.4s ease"
        _hover={{
          transform: "translateX(10px)",
          transitionDuration: "0.6s",
        }}
        fontSize="20px"
        mb={2}
      >
        {children}
      </Text>
    </Box>
  );
};

export default DrawerPageName;
