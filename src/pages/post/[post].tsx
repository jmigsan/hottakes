import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Text } from '@chakra-ui/react';
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
        <title>Hottakes | {data?.title}</title>
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

  return (
    <Box>
      <Text size={'xl'}>{data?.title}</Text>
      <Text>{data?.body}</Text>
      <Text>{data?.createdAt.toDateString()}</Text>
      <Text>{data?.user.name}</Text>
    </Box>
  );
};

export default Post;
