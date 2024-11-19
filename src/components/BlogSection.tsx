import {
  Box,
  Card,
  CardBody,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import colors from "../assets/colors/colors";
import BlogPosts from "../data/BlogPosts";
import SectionsTitle from "./SectionsTitle";

const BlogSection = ({ itmes = 3 }: { itmes: number }) => {
  return (
    <VStack>
      <SectionsTitle
        marginTop={10}
        title={"Latest News"}
        description={"Our Latest Foods News"}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mb={10}>
        {BlogPosts.slice(0, itmes).map((item, index) => (
          <GridItem key={index}>
            <Link to={`/NewsPage/${index}`}>
              <Card
                alignItems="center"
                mt={5}
                mb={5}
                overflow="hidden"
                h="100%"
              >
                <CardBody p={0}>
                  <Image
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform .30s ease-in-out",
                    }}
                    src={item.imageSrc}
                    h="200px"
                    w="100%"
                  />
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
              </Card>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default BlogSection;
