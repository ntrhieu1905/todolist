import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ListToggle from './container/todo/Toggle';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid>
        <h3 className="text-center">Todo Dashboard</h3>
        <Row>
          <Col md={12}>
            <ul>
              <li>Dashboard</li>
              <li>List</li>
            </ul>
          </Col>
        </Row>
        <ListToggle />
      </Container>
    </div>
  );
};

export default App;
