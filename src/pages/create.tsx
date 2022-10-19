import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';
// import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';

import Categorybar from '../components/Index/Categorybar';
import Posts from '../components/Index/Posts';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import Sidebar from '../components/All/Sidebar';
import { useState } from 'react';

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
  const createPostMutation = trpc.post.createPost.useMutation();
  const { data: sessionData } = useSession();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  // const utils = trpc.useContext()

  const createPost = () => {
    // const sanitisedTitle = DOMPurify.sanitize(title);
    // const sanitisedBody = DOMPurify.sanitize(body);

    // let screenedBody = '';
    // if (sanitisedBody === '<p></p>') {
    //   screenedBody = '';
    // } else {
    //   screenedBody = body;
    // }

    // let screenedTitle = '';
    // if (sanitisedTitle === '<p></p>') {
    //   screenedTitle = '';
    // } else {
    //   screenedTitle = title;
    // }

    createPostMutation.mutate({
      title,
      body,
      authorId: sessionData?.user?.id as string,
    });

    router.push('/');
    // utils.invalidate.
  };

  // page auth begin
  const { data: session } = useSession();

  if (!session) {
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
          />
          <Input
            placeholder={'Hot take...'}
            w={'100%'}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button colorScheme={'red'} onClick={() => createPost()}>
            Post
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Create;
