import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Show,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Categorybar = () => {
  return (
    <>
      <Center>
        <Show above='md'>
          <HStack>
            <Button>Most Liked</Button>
            <Button>Most Disliked</Button>
            <Button>Most Controversial</Button>
            <Button>Least Controversial</Button>
          </HStack>
        </Show>
      </Center>
      <Show below='md'>
        <SimpleGrid columns={2} spacing={2}>
          <Button>Most Liked</Button>
          <Button>Most Disliked</Button>
          <Button>Most Controversial</Button>
          <Button>Least Controversial</Button>
        </SimpleGrid>
      </Show>
    </>
  );
};
export default Categorybar;
