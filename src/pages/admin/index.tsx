import Head from 'next/head';

import Footer from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { HomeContainer } from '../../styles/HomeStyles';


export default function Home() {
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

