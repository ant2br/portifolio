import Head from 'next/head';
import { Header } from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import theme from '../../styles/theme';



export default function Projects() {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projects | Meu portfólio</title>
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
        <h1 style={{color: theme.primary}}>Page under construction </h1>
      </main>
    </ProjetosContainer>
  );
}


