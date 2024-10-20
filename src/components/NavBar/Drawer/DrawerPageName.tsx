import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const DrawerPageName = ({ children }: Props) => {
  return (
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
  );
};

export default DrawerPageName;
