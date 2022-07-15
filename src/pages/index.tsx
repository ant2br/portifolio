import Head from 'next/head';
import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import HomePage from '../components/Home';
import Projetos from '../components/Projetos';
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
      <Projetos projetos={projetos}/>
      <Conhecimentos />
      </main>

      <Footer />


      
    </HomeContainer>
  );
}

// const projetos = projectResponse.results.map(projeto => ({
//   slug: projeto.uid,
//   title: projeto.data.title,
//   type: projeto.data.type,
//   description: projeto.data.description,
//   link: projeto.data.link.url,
//   thumbnail: projeto.data.thumbnail.url
// }));


const projetos = [{
  slug: "projeto-1",
  title: 'Projeto 1',
  type: 'Projeto',
  description: 'Descrição do projeto 1',
  link: 'https://www.google.com',
  thumbnail: "https://via.placeholder.com/300x200"
},
{
  slug: "projeto-2",
  title: 'Projeto 2',
  type: 'Projeto',
  description: 'Descrição do projeto 2',
  link: 'https://www.google.com',
  thumbnail: "https://via.placeholder.com/300x200"
}]