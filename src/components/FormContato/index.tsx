import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container, Link } from './styles';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import theme from '../../styles/theme';


function FormContato() {
  return (
    <Container>

        <h1 style={{color: theme.primary, fontSize: '70px'}}>Page under construction</h1> <br />
        
      <ul style={{color: theme.secondary, fontSize: '40px'}}>
       <li> <FaLinkedin /> <Link target="_blank" href="https://www.linkedin.com/in/brener-viotto/">LinkedIn</Link></li>
       <li> <FaGithub /> <Link target="_blank" href="https://github.com/ant2br">Github</Link></li>
      </ul>

      



    {/* <SectionTitle
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

      <Form /> */}
    </Container>
  );
}

export default FormContato;