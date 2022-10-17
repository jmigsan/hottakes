import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

import Navbar from '../components/All/Navbar';
import Categorybar from '../components/Index/Categorybar';
import CreatePost from '../components/Index/CreatePost';
import Posts from '../components/Index/Posts';
import Navbr from '../components/All/Navbr';
import Nrbr from '../components/All/Nrbr';
import HomePage from '../components/Pages/HomePage';
import { Container } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hottakes</title>
        <meta name='description' content='See some spicy takes.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container maxW={'2xl'}>
          <Navbar />
          <CreatePost />
          <Categorybar />
          <Posts />
        </Container>
      </main>
    </>
  );
};

export default Home;
