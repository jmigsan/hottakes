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
  useToast,
} from '@chakra-ui/react';

const Categorybar = () => {
  const toast = useToast();

  const mostLiked = () => {
    toast({
      title: 'Feature not implemented yet',
      description: 'Would sort by most likes',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  const mostDisliked = () => {
    toast({
      title: 'Feature not implemented yet',
      description: 'Would sort by most dislikes',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  const mostControversial = () => {
    toast({
      title: 'Feature not implemented yet',
      description: 'Would sort by lowest ratio of likes to dislikes',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  const leastControversial = () => {
    toast({
      title: 'Feature not implemented yet',
      description: 'Would sort by highest ratio of likes to dislikes',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Center>
        <Show above='md'>
          <HStack>
            <Button colorScheme={'blackAlpha'} onClick={() => mostLiked()}>
              Most Liked
            </Button>
            <Button colorScheme={'blackAlpha'} onClick={() => mostDisliked()}>
              Most Disliked
            </Button>
            <Button
              colorScheme={'blackAlpha'}
              onClick={() => mostControversial()}
            >
              Most Controversial
            </Button>
            <Button
              colorScheme={'blackAlpha'}
              onClick={() => leastControversial()}
            >
              Least Controversial
            </Button>
          </HStack>
        </Show>
      </Center>
      <Show below='md'>
        <SimpleGrid columns={2} spacing={2}>
          <Button colorScheme={'blackAlpha'} onClick={() => mostLiked()}>
            Most Liked
          </Button>
          <Button colorScheme={'blackAlpha'} onClick={() => mostDisliked()}>
            Most Disliked
          </Button>
          <Button
            colorScheme={'blackAlpha'}
            onClick={() => mostControversial()}
          >
            Most Controversial
          </Button>
          <Button
            colorScheme={'blackAlpha'}
            onClick={() => leastControversial()}
          >
            Least Controversial
          </Button>
        </SimpleGrid>
      </Show>
    </>
  );
};
export default Categorybar;
