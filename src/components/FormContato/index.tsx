import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container, Link } from './styles';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import theme from '../../styles/theme';


function FormContato() {
  return (
    <Container>



    <SectionTitle
            title={
            <>
                Message
            </>
            }
            description={
            <>
                Did not find what you wanted?
                <br />
                Send a message, I will reply as soon as possible
            </>
            }
        />

      <Form />
    </Container>
  );
}

export default FormContato;