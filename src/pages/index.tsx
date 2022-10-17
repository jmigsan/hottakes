import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

import Navbar from '../components/All/Navbar';
import Categorybar from '../components/Index/Categorybar';
import CreatePost from '../components/Index/CreatePost';
import Posts from '../components/Index/Posts';
import HomePage from '../components/Pages/HomePage';
import { Container, Divider } from '@chakra-ui/react';
import Sidebar from '../components/All/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hottakes</title>
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
        {/* <CreatePost /> */}
        {/* <Divider mb={2} /> */}
        <Categorybar />
        <Posts />
      </Container>
    </>
  );
};

export default Home;
