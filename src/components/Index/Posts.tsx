import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';

const Posts = () => {
  return (
    <Box py={'3'}>
      <Stack>
        <Box>
          <Center>
            <Stack>
              <Box>
                <Image
                  src='https://images.unsplash.com/photo-1665865553329-fc8a48ca8584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
                  boxSize='md'
                  objectFit='cover'
                />
                <Text>yo</Text>
              </Box>
              <Box>
                <Image
                  src='https://images.unsplash.com/photo-1665873364045-74b357e96d2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                  boxSize='md'
                  objectFit='cover'
                />
                <Text>oi</Text>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
};
export default Posts;
