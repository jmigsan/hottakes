import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

import Navbar from '../components/All/Navbar';
import Categorybar from '../components/Index/Categorybar';
import CreatePost from '../components/Index/CreatePost';
import Posts from '../components/Index/Posts';
import { Box, Container, Divider } from '@chakra-ui/react';
import Sidebar from '../components/All/Sidebar';
import FloatingButton from '../components/Index/FloatingButton';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hottakes | Create post</title>
        <meta name='description' content='See some spicy takes.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Sidebar children={<IndexPage />} />
      </main>
    </>
  );
};

const IndexPage = () => {
  return (
    <>
      <Container maxW={'2xl'}>
        <CreatePost />
      </Container>
    </>
  );
};

export default Home;
