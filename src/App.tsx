import {
  Container, Row,
} from 'react-bootstrap';
import PageNavbar from './components/navbar';
import PageHome from './components/page';

function App() {
  return (
    <>
      <PageNavbar />
      <Container fluid style={{ marginTop: '40px' }}>
        <Row>
          <PageHome />
        </Row>
      </Container>
    </>

  );
}

export default App;
