import { Box, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";
import colors from "../assets/colors/colors";
import ContactUsContainer from "../components/ContactUsContainer";
import ContactSendSection from "../components/ContactSendSection";

const Contact = () => {
  return (
    <Box alignItems="center" justifyContent="center" bg={colors.beige}>
      <HStack p={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={7}>
          <GridItem>
            <ContactUsContainer
              icon={<MdPlace size="30px" />}
              title={"Our Address"}
              description={"4517 Washington Ave. Manchester, Kentucky 39495"}
            />
          </GridItem>
          <GridItem>
            <ContactUsContainer
              icon={<MdEmail size="30px" />}
              title={"info@exmple.com"}
              description={"Email us anytime for any kind ofquety."}
            />
          </GridItem>
          <GridItem>
            <ContactUsContainer
              icon={<FaPhoneAlt size="30px" />}
              title={"Hot: +208-666-01112"}
              description={"24/7/365 priority Live Chat and ticketing support."}
            />
          </GridItem>
          <GridItem>
            <ContactUsContainer
              icon={<FaClock size="30px" />}
              title={"Opening Hour"}
              description={"Sunday-Fri: 9 AM - 6 PM Saturday: 9 AM - 4 PM"}
            />
          </GridItem>
        </SimpleGrid>
      </HStack>
      <ContactSendSection />
    </Box>
  );
};

export default Contact;
