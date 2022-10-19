import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';

const Posts = () => {
  const posts = trpc.post.displayPosts.useQuery();

  return (
    <Box py={'3'}>
      <Stack>
        <Box>
          <Center>
            <Stack>
              {/* get post from chakra templates */}
              {posts.data?.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <Box bg={'gray.200'} p={3} rounded={'lg'}>
                    <Text fontSize={'2xl'}>{post.title}</Text>
                    <Text>{post.body}</Text>
                    <Text>{post.createdAt.toDateString()}</Text>
                    <Text>{post.authorId}</Text>
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
