import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa6";
import colors from "../assets/colors/colors";

interface Props {
  text: string;
  name: string;
  userName: string;
  userImageSrc: string;
}

const CommentsContainer = (props: Props) => {
  return (
    <Card
      borderTop="2px"
      borderTopColor={colors.mainYello}
      p={5}
      borderRadius="20px"
      bg="white"
    >
      <CardBody>
        <FaQuoteLeft size={60} color="#d5d5d5" />
        <Text fontSize={25} fontWeight={600} color={colors.black}>
          {props.text}
        </Text>
      </CardBody>
      <CardFooter p={2}>
        <HStack>
          <Image src={props.userImageSrc} w={20} h={20} borderRadius="50%" />
          <VStack alignItems="start" spacing={0}>
            <Heading fontSize={20}>{props.name}</Heading>
            <Text fontWeight="500" color="gray" fontSize={15}>
              {props.userName}
            </Text>
          </VStack>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CommentsContainer;
