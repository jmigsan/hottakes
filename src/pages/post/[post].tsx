import type { NextPage } from 'next';
import Head from 'next/head';
import DOMPurify from 'isomorphic-dompurify';

import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';
import Sidebar from '../../components/All/Sidebar';

const Post: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data } = trpc.post.displayPost.useQuery({ id: postId as string });

  return (
    <>
      <Head>
        <title>Hottakes | Post by {data?.user.name}</title>
        <meta name='description' content='See some spicy takes.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Sidebar children={<PostPage />} />
      </main>
    </>
  );
};

export const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data } = trpc.post.displayPost.useQuery({ id: postId as string });

  console.log(data);

  return (
    <Box>
      <Box rounded={'xl'} bg={'gray.200'} p={'4'} minW={'md'}>
        <HStack pb={'3'}>
          <Avatar size={'sm'} src={data?.user.image as string} />
          <Text>{data?.user.name}</Text>
        </HStack>
        <Box
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.body as string),
          }}
        />
        <Text fontSize={'sm'} pt={'2'} align={'end'}>
          {data?.createdAt.toDateString()}
        </Text>
      </Box>
    </Box>
  );
};

export default Post;
