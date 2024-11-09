import { Image, SimpleGrid, Box } from "@chakra-ui/react";
import gallery from "../data/Gallery";

const Gallery = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4, xl: 6 }}
      spacing={5}
      justifyContent="center"
      display="flex"
    >
      {gallery.map((item, index) => (
        <Box key={index} mt="100px">
          <Image w="250px" h="100%" key={index} src={item.postSrc} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Gallery;
