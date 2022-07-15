import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
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
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  

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

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};