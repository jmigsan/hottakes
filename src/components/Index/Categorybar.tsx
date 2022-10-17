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
            <Button colorScheme={'blackAlpha'}>Most Liked</Button>
            <Button colorScheme={'blackAlpha'}>Most Disliked</Button>
            <Button colorScheme={'blackAlpha'}>Most Controversial</Button>
            <Button colorScheme={'blackAlpha'}>Least Controversial</Button>
          </HStack>
        </Show>
      </Center>
      <Show below='md'>
        <SimpleGrid columns={2} spacing={2}>
          <Button colorScheme={'blackAlpha'}>Most Liked</Button>
          <Button colorScheme={'blackAlpha'}>Most Disliked</Button>
          <Button colorScheme={'blackAlpha'}>Most Controversial</Button>
          <Button colorScheme={'blackAlpha'}>Least Controversial</Button>
        </SimpleGrid>
      </Show>
    </>
  );
};
export default Categorybar;
