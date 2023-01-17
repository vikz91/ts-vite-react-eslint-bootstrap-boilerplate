import {
  Col,
} from 'react-bootstrap';

import CGreeter from './greeter';
import CTodos from './todo';

export default function PageHome() {
  return (
    <>
      <Col>
        <CGreeter name="kaka" />
      </Col>
      <Col md="3">
        <CTodos />
      </Col>
    </>
  );
}
