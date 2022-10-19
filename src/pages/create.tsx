import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Sidebar from '../components/All/Sidebar';
import { useState } from 'react';
import TipTap from '../components/Create/TipTap';

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hottakes | Create post</title>
        <meta name='description' content='See some spicy takes.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Sidebar children={<CreatePage />} />
      </main>
    </>
  );
};

const CreatePage = () => {
  const toast = useToast();
  const utils = trpc.useContext();
  const createPostMutation = trpc.post.createPost.useMutation({
    onMutate: () => {
      toast({
        title: 'Post uploading',
        description: 'Please wait',
        status: 'loading',
        duration: 100000,
      });
    },
    onError: () => {
      toast.closeAll();
      toast({
        title: 'Post failed',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
    onSettled: () => {
      utils.post.displayPosts.invalidate();
      toast.closeAll();
      toast({
        title: 'Post uploaded',
        description: 'Successfully updated a post',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const { data: sessionData } = useSession();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('<p></p>');
  const router = useRouter();

  const createPost = () => {
    const sanitisedBody = DOMPurify.sanitize(body);

    if (title.trim() === '') {
      toast({
        title: 'Write your title!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (sanitisedBody === '<p></p>') {
      toast({
        title: 'Write your take!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    console.log('yoooo');

    createPostMutation.mutate({
      title,
      body: sanitisedBody,
      authorId: sessionData?.user?.id as string,
    });

    router.push('/');
  };

  // page auth begin
  if (!sessionData) {
    return (
      <Box>
        <Container>
          <Stack p={'2'}>
            <Center>
              <Text>Sign in to create a post</Text>
            </Center>
            <Button onClick={() => signIn()}>Sign In </Button>
          </Stack>
        </Container>
      </Box>
    );
  }
  // page auth end

  return (
    <>
      <Container maxW={'2xl'}>
        <Stack>
          <Input
            placeholder={'Title'}
            w={'100%'}
            onChange={(e) => setTitle(e.target.value)}
            fontSize={'2xl'}
            fontWeight={'bold'}
          />
          <TipTap setState={setBody} />
          <Text>{body}</Text>
          <Button colorScheme={'red'} onClick={() => createPost()}>
            Post
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Create;
