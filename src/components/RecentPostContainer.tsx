import { HStack, Image, VStack, Text } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import { useNavigate } from "react-router-dom";

interface Props {
  imageSrc: string;
  date: string;
  title: string;
  index: number; // Include index as a prop
}

const RecentPostContainer = ({ imageSrc, date, title, index }: Props) => {
  const navigate = useNavigate();

  return (
    <HStack
      alignItems="start"
      onClick={() => navigate(`/NewsPage/${index}`)}
      cursor="pointer"
      spacing={4}
    >
      <Image
        src={imageSrc}
        boxSize={{ base: 10, md: 20 }}
        borderRadius="10px"
      />

      <VStack alignItems="start" spacing={0}>
        <Text fontWeight={600} fontSize="md" color={colors.mainYello}>
          {date}
        </Text>
        <Text fontWeight="700" whiteSpace="wrap">
          {title}
        </Text>
      </VStack>
    </HStack>
  );
};

export default RecentPostContainer;
