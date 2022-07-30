import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';

import Footer from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HomeContainer } from '../../styles/HomeStyles';





export default function Home() {
  useEffect (() => {
  
    localStorage.removeItem('user');
    router.push('/');
} , []);
  return (
    <HomeContainer>
      <Head>
        <title>Admin - New Project | My portfolio</title>
      </Head>

      <HeaderAdmin children={''} />

      <main className="container">


      </main>

      <Footer />


      
    </HomeContainer>
  );
}

