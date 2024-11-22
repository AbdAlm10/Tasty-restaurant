import {
  Box,
  Button,
  Divider,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaComments, FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { useParams } from "react-router-dom";
import colors from "../assets/colors/colors";
import RecentPostContainer from "../components/RecentPostContainer";
import UserCommentsContainer from "../components/UserCommentsContainer";
import BlogPosts from "../data/BlogPosts";
import comments from "../data/Commetns";

const NewsPage = () => {
  const { index } = useParams();
  const newsItem = BlogPosts[Number(index)];

  if (!newsItem)
    return (
      <Text textAlign="center" fontSize="lg" color={colors.mainYello}>
        News not found!
      </Text>
    );

  return (
    <HStack bg={colors.beige} p={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} key={index} spacing={8}>
        <GridItem>
          <VStack alignItems="start">
            <Image
              src={newsItem.imageSrc}
              alt={newsItem.title}
              borderRadius="30px"
            />
            <HStack my={1} spacing={5}>
              <HStack>
                <FaUserCircle color={colors.mainBrown} />
                <Text>{newsItem.auther}</Text>
              </HStack>
              <HStack>
                <MdCategory color={colors.mainBrown} />
                <Text>{newsItem.gategory}</Text>
              </HStack>
              <HStack>
                <FaComments color={colors.mainBrown} />
                <Text>{newsItem.comments}</Text>
              </HStack>
            </HStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack p={5} justifyContent="start" alignItems="start" spacing={5}>
            <Heading color={colors.black}>{newsItem.title}</Heading>
            <Text maxW={800} color="gray.500">
              {newsItem.text}
            </Text>
            <Divider />
            <HStack>
              <Heading color={colors.black} fontSize="xl">
                Tag :
              </Heading>
              <Heading fontSize="xl" color={colors.mainYello}>
                {newsItem.gategory}
              </Heading>
            </HStack>
          </VStack>
        </GridItem>

        <GridItem>
          <Box p={5} my={5}>
            <Divider />

            <Heading mt={5} fontSize="2xl">
              Comments: {newsItem.comments}
            </Heading>
            {comments.map((com, index) => (
              <VStack mt={5} key={index}>
                <UserCommentsContainer
                  userImage={com.imageSrc}
                  name={com.name}
                  time={com.date}
                  comment={com.comment}
                />
              </VStack>
            ))}
          </Box>
        </GridItem>

        <GridItem>
          <VStack
            bg="white"
            p={5}
            w="70%"
            borderRadius="10px"
            justifySelf={{ base: "center", md: "end" }}
            alignItems="start"
          >
            <Heading color={colors.black} fontSize="2xl">
              Recent Post
            </Heading>
            <Divider />

            {BlogPosts.slice(0, 3).map((post, index) => (
              <VStack mt={3} key={index}>
                <RecentPostContainer
                  imageSrc={post.imageSrc}
                  date={`${post.month}, ${post.date}`}
                  title={post.title}
                  index={index}
                />
              </VStack>
            ))}
          </VStack>
        </GridItem>

        <VStack spacing={3} p={5} alignItems="start" maxW="700px">
          <Heading fontSize="2xl">Leave a comments</Heading>
          <HStack w="100%">
            <Input bg="white" placeholder="your Name" />
            <Input bg="white" placeholder="your Email" />
          </HStack>
          <Input bg="white" placeholder="Write a comment" />
          <Button
            _hover={{ bg: colors.mainYello }}
            bg={colors.mainYello}
            color="white"
          >
            Send
          </Button>
        </VStack>
      </SimpleGrid>
    </HStack>
  );
};

export default NewsPage;
