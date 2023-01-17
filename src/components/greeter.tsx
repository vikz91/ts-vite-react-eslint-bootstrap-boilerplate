import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface IGreeterInput {
  name: string
}

export default function CGreeter({ name }: IGreeterInput) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pravatar.cc/200" />
      <Card.Body>
        <Card.Title>Good Greetings</Card.Title>
        <Card.Text>
          How are you,
          {' '}
          {name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
