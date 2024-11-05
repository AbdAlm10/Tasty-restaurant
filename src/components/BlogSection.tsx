import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { IoArrowUndoSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import colors from "../assets/colors/colors";
import BlogPosts from "../data/BlogPosts";
import SectionsTitle from "./SectionsTitle";

const BlogSection = () => {
  return (
    <VStack mb={10}>
      <SectionsTitle
        marginTop={10}
        title={"Latest News"}
        description={"Our Latest Foods News"}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={7}>
        {BlogPosts.map((item, index) => (
          <GridItem key={index}>
            <Card
              alignItems="center"
              mt={5}
              overflow="hidden"
              h="auto"
              minH="450px"
            >
              <CardBody p={0}>
                <Image src={item.imageSrc} h="200px" w="100%" />
                <HStack alignItems="center" p={5} spacing={5}>
                  <VStack
                    spacing={0}
                    bg={colors.mainYello}
                    color="white"
                    p={1}
                    w="20%"
                  >
                    <Text fontWeight="bold" fontSize="20">
                      {item.date}
                    </Text>
                    <Text fontWeight="500">{item.month}</Text>
                  </VStack>

                  <Box color={colors.black} fontSize="17" fontWeight="600">
                    <HStack>
                      <FaUserCircle color={colors.mainBrown} />
                      <Text>{item.auther}</Text>
                    </HStack>
                    <HStack>
                      <MdCategory color={colors.mainBrown} />
                      <Text>{item.gategory}</Text>
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
                  <Text>{item.title}</Text>
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
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default BlogSection;
