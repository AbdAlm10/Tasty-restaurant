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
import style from "../GenralStyle";

interface Props {
  text: string;
  name: string;
  userName: string;
  userImageSrc: string;
}

const responseSize = {
  HeightAndWidth: { base: "50px" },
  FontSize: {
    name: { base: "18px", lg: "20px" },
    userName: { base: "12px", lg: "15px" },
  },
};

const CommentsContainer = (props: Props) => {
  return (
    <Card
      borderTop="2px"
      borderTopColor={colors.mainYello}
      h="100%"
      p={5}
      borderRadius="20px"
      bg="white"
    >
      <CardBody>
        <FaQuoteLeft size={60} color="#d5d5d5" />
        <Text
          fontSize={style.text.largText}
          fontWeight={style.Weight.light}
          color={colors.black}
        >
          {props.text}
        </Text>
      </CardBody>
      <CardFooter p={2}>
        <HStack>
          <Image
            src={props.userImageSrc}
            w={responseSize.HeightAndWidth}
            h={responseSize.HeightAndWidth}
            borderRadius="full"
          />
          <VStack alignItems="start" spacing={0}>
            <Heading fontSize={responseSize.FontSize.name}>
              {props.name}
            </Heading>
            <Text
              fontWeight={style.Weight.light}
              color="gray"
              fontSize={responseSize.FontSize.userName}
            >
              {props.userName}
            </Text>
          </VStack>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CommentsContainer;
