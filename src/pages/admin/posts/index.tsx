import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';

import Footer from '../../../components/Footer';
import { HeaderAdmin } from '../../../components/HeaderAdmin';
import Posts from '../../../components/Posts';

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
        <title>Admin - Posts | My portfolio</title>
      </Head>

      <HeaderAdmin children={''} />

      <main className="container">
        <Posts />
      </main>

      <Footer />


      
    </HomeContainer>
  );
}

