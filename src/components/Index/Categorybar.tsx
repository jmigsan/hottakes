import { Box, Button, Center, HStack } from '@chakra-ui/react';

const Categorybar = () => {
  return (
    <Box>
      <Center p={'1'}>
        <HStack>
          <Button>Most Liked</Button>
          <Button>Most Disliked</Button>
          <Button>Most Controversial</Button>
          <Button>Least Controversial</Button>
        </HStack>
      </Center>
    </Box>
  );
};
export default Categorybar;
