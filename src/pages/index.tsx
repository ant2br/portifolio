import Head from 'next/head';
import Experiencias from '../components/Experiencias';
import { Header } from '../components/Header';
import HomePage from '../components/Home';
import { HomeContainer } from '../styles/HomeStyles';


export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>

      <Header />

      <main className="container">

      <HomePage />
      <Experiencias />

      </main>

      
    </HomeContainer>
  );
}
