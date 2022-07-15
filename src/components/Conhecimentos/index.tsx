import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact,FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container, TextMuito } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Skills" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="React Native" icon={<FaReact />} />
        <ConhecimentoItem title="Docker" icon={<FaDocker />} />

      </section>

      <TextMuito>And much more (See LinkedIn)</TextMuito>
    </Container>
  );
}

export default Conhecimentos;