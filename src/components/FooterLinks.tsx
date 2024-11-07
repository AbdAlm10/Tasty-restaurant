import { Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  links: ReactNode;
}

const FooterLinks = (props: Props) => {
  return (
    <VStack fontWeight="400">
      <Heading fontSize="20px">{props.title}</Heading>
      {props.links}
    </VStack>
  );
};

export default FooterLinks;
