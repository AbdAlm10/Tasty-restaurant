import { VStack, Heading, Text } from "@chakra-ui/react";
import colors from "../assets/colors/colors";

interface Props {
  title: string;
  description: string;
  marginTop?: number;
}

const SectionsTitle = ({ title, description, marginTop }: Props) => {
  return (
    <VStack mt={marginTop} fontWeight="bold" fontSize={20}>
      <Text color={colors.mainYello}>{title}</Text>
      <Heading color={colors.black}>{description}</Heading>
    </VStack>
  );
};

export default SectionsTitle;
