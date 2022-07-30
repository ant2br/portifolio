import Head from 'next/head';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';

import { HomeContainer } from '../../styles/HomeStyles';


export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Login | My portfolio</title>
      </Head>

      <Header children={''} />

      <main className="container">
        <LoginForm />

      </main>

      <Footer />


      
    </HomeContainer>
  );
}

