import { Tab, Image, Text, Divider } from "@chakra-ui/react";
import colors from "../../assets/colors/colors";

interface Props {
  imageSrc: string;
  title: string;
}

const FoodMenuTap = ({ imageSrc, title }: Props) => {
  return (
    <>
      <Tab _selected={{ color: colors.mainYello }}>
        <Image src={imageSrc} />
        <Text fontSize={20} fontWeight={500} mx={3}>
          {title}
        </Text>
      </Tab>
      <Divider orientation="vertical" />
    </>
  );
};

export default FoodMenuTap;
