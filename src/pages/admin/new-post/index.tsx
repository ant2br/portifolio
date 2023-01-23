import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';

import Footer from '../../../components/Footer';
import { HeaderAdmin } from '../../../components/HeaderAdmin';
import CreatePost from '../../../components/NewPost';
import { HomeContainer } from '../../../styles/HomeStyles';


// useEffect (() => {
//   const token = localStorage.getItem('user');
//   if (!token) {
//       router.push('/');
//   }
// } , []);


export default function Home() {
    // useEffect (() => {
    //     const token = localStorage.getItem('user');
    //     if (!token) {
    //         router.replace('/');
    //     }
    //   } , []);
  return (
    <HomeContainer>
      <Head>
        <title>Admin - New Post | My portfolio</title>
      </Head>

      <HeaderAdmin children={''} />

      <main className="container">
        <CreatePost />
      </main>

      <Footer />


      
    </HomeContainer>
  );
}

