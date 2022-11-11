import type { NextPage } from 'next';
import Head from 'next/head';
import DOMPurify from 'isomorphic-dompurify';

import {
  Avatar,
  Box,
  HStack,
  Text,
  Link as ChakraLink,
  Stack,
  Skeleton,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';
import Sidebar from '../../components/All/Sidebar';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { useSession } from 'next-auth/react';

const Post: NextPage = () => {
  const router = useRouter();
  const { post } = router.query;
  const { data } = trpc.post.displayPost.useQuery({ id: post as string });

  return (
    <>
      <Head>
        <title>Hottakes | Post by {data?.user.name}</title>
        <meta name='description' content='See some spicy takes.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Sidebar children={<PostPage post={post as string} />} />
      </main>
    </>
  );
};

const BackToHomeLink = () => {
  return (
    <Box pb={'3'}>
      <Link href={'/'}>← Back to home</Link>
    </Box>
  );
};

const NoData = () => {
  return (
    <Box rounded={'xl'} bg={'gray.200'} p={'4'} minW={'md'}>
      <HStack pb={'3'}>
        <Avatar size={'sm'} />
      </HStack>
      <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
    </Box>
  );
};

const PostPage = ({ post }: { post: string }) => {
  const { data: sessionData } = useSession();
  const { data } = trpc.post.displayPost.useQuery({ id: post as string });

  const router = useRouter();
  const utils = trpc.useContext();
  const toast = useToast();
  const deletePostMutation = trpc.post.deletePost.useMutation({
    onMutate: () => {
      toast({
        title: 'Deleting post',
        description: 'Please wait',
        status: 'loading',
        duration: 100000,
      });
    },
    onError: () => {
      toast.closeAll();
      toast({
        title: 'Delete failed',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
    onSettled: () => {
      utils.post.displayPosts.invalidate();
      toast.closeAll();
      toast({
        title: 'Post deleted',
        description: 'Successfully deleted a post',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const deletePost = ({ post }: { post: string }) => {
    deletePostMutation.mutate({ postId: post });
    router.push('/');
  };

  if (data?.body === undefined) {
    return (
      <>
        <BackToHomeLink />
        <NoData />
      </>
    );
  }

  if (data?.userId === sessionData?.user?.id) {
    return (
      <Box>
        <BackToHomeLink />
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
        <Button onClick={() => deletePost({ post })} mt={'3'}>
          Delete Post
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <BackToHomeLink />
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
