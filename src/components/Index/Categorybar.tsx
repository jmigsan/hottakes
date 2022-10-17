import { Box, Button, Center, HStack, SimpleGrid } from '@chakra-ui/react';

const Categorybar = () => {
  return (
    <Box>
      <Center p={'1'}>
        {/* <HStack display={{ base: 'none', md: 'inline' }}>
          <Button>Most Liked</Button>
          <Button>Most Disliked</Button>
          <Button>Most Controversial</Button>
          <Button>Least Controversial</Button>
        </HStack> */}
        <SimpleGrid columns={2} spacing={10}>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
};
export default Categorybar;
