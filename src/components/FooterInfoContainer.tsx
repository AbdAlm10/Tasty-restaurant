import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  text: string;
  heading: string;
  children: ReactNode;
}

const FooterInfoContainer = (props: Props) => {
  return (
    <HStack>
      {props.children}
      <VStack ml={3} spacing={0} alignItems="start" color="white">
        <Text fontWeight="600">{props.text}</Text>
        <Heading fontSize="20">{props.heading}</Heading>
      </VStack>
    </HStack>
  );
};

export default FooterInfoContainer;
