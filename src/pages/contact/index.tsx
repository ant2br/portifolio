import Head from 'next/head';
import Footer from '../../components/Footer';
import FormContato from '../../components/FormContato';
import { Header } from '../../components/Header';
import { HomeContainer } from '../../styles/HomeStyles';



export default function Contact() {
  return (
    <HomeContainer>
      <Head>
        <title>Contacts | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header children={''} />
      <main className="container">
        <FormContato />

      </main>

      <Footer />
    </HomeContainer>
  );
}


