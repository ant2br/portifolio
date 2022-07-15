import Head from 'next/head';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import HomePage from '../components/Home';
import { HomeContainer } from '../styles/HomeStyles';


export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | My portfolio</title>
        <meta
          name="description"
          content="I'm a Full-Stack developer and here I present some projects developed by me!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>

      <Header children={''} />

      <main className="container">

      <HomePage />
      <Experiencias />

      </main>

      <Footer />


      
    </HomeContainer>
  );
}
