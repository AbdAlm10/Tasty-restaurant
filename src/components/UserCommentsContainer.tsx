import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  userImage: string;
  name: string;
  time: string;
  comment: string;
}

const UserCommentsContainer = ({ userImage, name, time, comment }: Props) => {
  return (
    <HStack align="start" spacing={4}>
      <Image src={userImage} borderRadius="full" boxSize="65px" />
      <VStack align="start" spacing={1}>
        <Heading fontSize="20px">{name}</Heading>
        <Text fontSize="sm" color="gray.500">
          {time}
        </Text>
        <Text>{comment}</Text>
      </VStack>
    </HStack>
  );
};

export default UserCommentsContainer;
