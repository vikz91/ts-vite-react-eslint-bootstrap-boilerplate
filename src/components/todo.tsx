import { ListGroup, Form } from 'react-bootstrap';
import uuid from 'react-uuid';

const todoData = [
  { title: 'Integrate VSCode settings', checked: true },
  { title: 'Integrate eslint', checked: true },
  { title: 'Integrtae Husky', checked: true },
  { title: 'Integrate Jest', checked: false },
  { title: 'Integrate react-router-dom', checked: false },
  { title: 'Integrater swr', checked: false },
  { title: 'Integrate Sass', checked: false },
];
export default function CTodos() {
  return (
    <>
      <h4><small>ToDos</small></h4>
      <ListGroup>
        {todoData.map((x) => (
          <ListGroup.Item key={uuid()}>
            <Form.Check
              type="checkbox"
              label={x.title}
              checked={x.checked}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
