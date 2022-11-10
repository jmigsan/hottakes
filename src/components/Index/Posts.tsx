import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import DOMPurify from 'isomorphic-dompurify';

const Posts = () => {
  const posts = trpc.post.displayPosts.useQuery();

  return (
    <Box py={'4'}>
      <Stack>
        <Box>
          <Center>
            <Stack spacing={'4'}>
              {posts.data?.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <Box rounded={'xl'} bg={'gray.200'} p={'4'} minW={'md'}>
                    <HStack pb={'3'}>
                      <Avatar size={'sm'} src={post.user.image as string} />
                      <Text>{post.user.name}</Text>
                    </HStack>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.body),
                      }}
                    />
                    <Text fontSize={'sm'} pt={'2'} align={'end'}>
                      {post.createdAt.toDateString()}
                    </Text>
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
