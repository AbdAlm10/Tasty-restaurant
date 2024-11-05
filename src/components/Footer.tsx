import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import colors from "../assets/colors/colors";
import FooterInfoContainer from "./FooterInfoContainer";
import { MdEmail, MdPlace } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" bg="blackAlpha.900" h="600px">
      <SimpleGrid
        spacing={20}
        alignItems="center"
        justifyContent="center"
        display="flex"
        p={5}
        columns={{ base: 1, lg: 3 }}
        mt={20}
        borderRadius="20px"
        bg={colors.mainYello}
        w="85%"
        h={{ base: "200px", lg: "100px" }}
      >
        <GridItem>
          <FooterInfoContainer
            text={"address"}
            heading={"4648 Rocky Road Philadelphia"}
            children={<MdPlace color="white" size={30} />}
          />
        </GridItem>
        <GridItem>
          <FooterInfoContainer
            text={"address"}
            heading={"4648 Rocky Road Philadelphia"}
            children={<MdEmail color="white" size={30} />}
          />
        </GridItem>
        <GridItem>
          <FooterInfoContainer
            text={"call emergency"}
            heading={"+88 0123 654 99"}
            children={<IoCall color="white" size={30} />}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
