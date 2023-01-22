/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function HomePage() {
  return (
    <Container data-aos="fade-up">
      <img src={'../../assets/pessoa.png'} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>My name is Brener</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//my presentation</span>
            <span className="purple">Information</span> {'\u007B'}
            <div>
              Name: <span className="blue">Brener,</span>
            </div>
            <div>
            Last name: <span className="blue">Viotto,</span>
            </div>
            <div>
            Age: <span className="blue">21,</span>
            </div>
            <div>
            Country: <span className="blue">Brazil</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Skills</span> {'\u007B'}
            <div>
            Qualification: <span className="blue">Analysis and systems development,</span>
            </div>

            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomePage;