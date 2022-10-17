import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import { trpc } from '../../utils/trpc';

const Posts = () => {
  const posts = trpc.return(
    <Box py={'3'}>
      <Stack>
        <Box>
          <Center>
            <Stack>
              {allPosts.data?.map((post) => (
                <Link href={`/post/${post.postId}`} key={post.postId}>
                  <Box bg={'gray.200'} p={3} rounded={'lg'}>
                    <>
                      <Text fontSize={'2xl'}>{post.title}</Text>
                      <Text>{post.publishDate?.toDateString()}</Text>
                      <Text>{post.author}</Text>
                    </>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
};
export default Posts;
