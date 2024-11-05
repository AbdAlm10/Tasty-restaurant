import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import colors from "../assets/colors/colors";
import blog1 from "../assets/images/BlogImage/blog1.png";
import SectionsTitle from "./SectionsTitle";
import { IoArrowUndoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <VStack mb={10}>
      <SectionsTitle
        marginTop={10}
        title={"LATEST NEWS"}
        description={"Our Latest Foods News"}
      />
      <HStack>
        <Card alignItems="center" mt={5} overflow="hidden">
          <CardBody p={0}>
            <Image src={blog1} h="200px" w="100%" />
            <HStack alignItems="center" p={5} spacing={5}>
              <VStack
                spacing={0}
                bg={colors.mainYello}
                color="white"
                p={1}
                w="20%"
              >
                <Text fontWeight="bold" fontSize="20">
                  25
                </Text>
                <Text fontWeight="500">Des</Text>
              </VStack>

              <Box color={colors.black} fontSize="17" fontWeight="600">
                <HStack>
                  <FaUserCircle color={colors.mainBrown} />
                  <Text>abdulrahman</Text>
                </HStack>
                <HStack>
                  <MdCategory color={colors.mainBrown} />
                  <Text>writer</Text>
                </HStack>
              </Box>
            </HStack>
            <Box
              maxW="250px"
              fontWeight="600"
              mx="5"
              fontSize="20"
              whiteSpace="wrap"
              color={colors.black}
            >
              <Text>Fast Food Frenzy a Taste of Convenience</Text>
            </Box>
          </CardBody>
          <CardFooter justifyContent="start" w="100%" p={2}>
            <Link to="LatestBlog/">
              <Button
                rightIcon={<IoArrowUndoSharp />}
                bg="non"
                _hover="none"
                _active="none"
                color="gray.500"
              >
                Read More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </HStack>
    </VStack>
  );
};

export default BlogSection;
