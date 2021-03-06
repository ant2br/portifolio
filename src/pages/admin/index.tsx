import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';

import Footer from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HomeContainer } from '../../styles/HomeStyles';





export default function Home() {

  useEffect (() => {
  const token = localStorage.getItem('user');
  if (!token) {
      router.replace('/');
  }
} , []);
  return (
    <HomeContainer>
      <Head>
        <title>Admin | My portfolio</title>
      </Head>

      <HeaderAdmin children={''} />

      <main className="container">


      </main>

      <Footer />


      
    </HomeContainer>
  );
}

