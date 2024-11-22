import {
  SimpleGrid,
  GridItem,
  Image,
  Box,
  Heading,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import contact from "../assets/images/contactThumb2_1.png";
import colors from "../assets/colors/colors";
import { useState } from "react";
import style from "../GenralStyle";

const ContactSendSection = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
  };
  return (
    <SimpleGrid mt="50px" columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Image
          src={contact}
          w={{ md: "100%", lg: "80%" }}
          h={{ md: "100%", lg: "100%" }}
        />
      </GridItem>
      <GridItem p={5}>
        <Box borderRadius="20px" bg="white" p={10}>
          <Heading color={colors.black} fontSize="30">
            Get in Touch
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt={5}>
            <Input placeholder="Full Name" />
            <Input placeholder="Email Adress" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Subject" />
            <GridItem>
              <Input placeholder="Write Your Message Here" />
            </GridItem>
            <Button
              onClick={handleSubmit}
              bg={colors.mainYello}
              color="white"
              _hover={{ bg: colors.mainYello }}
            >
              Submit Now
            </Button>
          </SimpleGrid>
        </Box>
        {submit && (
          <Alert
            status="success"
            borderRadius={style.radius.largeRadius}
            mt={5}
          >
            <AlertIcon />
            Your message has been sent successfully
          </Alert>
        )}
      </GridItem>
    </SimpleGrid>
  );
};

export default ContactSendSection;
