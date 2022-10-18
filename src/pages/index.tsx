import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

import Categorybar from '../components/Index/Categorybar';
import Posts from '../components/Index/Posts';
import { Container, Divider } from '@chakra-ui/react';
import Sidebar from '../components/All/Sidebar';
import FloatingButton from '../components/Index/FloatingButton';

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
        <FloatingButton />
      </Container>
    </>
  );
};

export default Home;
