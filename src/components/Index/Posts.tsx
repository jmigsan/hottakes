import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import DOMPurify from 'isomorphic-dompurify';

const Posts = () => {
  const posts = trpc.post.displayPosts.useQuery();

  return (
    <Box py={'3'}>
      <Stack>
        <Box>
          <Center>
            <Stack>
              {posts.data?.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <Box bg={'gray.200'} p={3} rounded={'lg'}>
                    <Text fontSize={'2xl'}>{post.title}</Text>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.body),
                      }}
                    />
                    <Text>{post.createdAt.toDateString()}</Text>
                    <Text>{post.user.name}</Text>
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
