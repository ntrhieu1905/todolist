import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddTodo from './container/todo/addTodo';

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
        <Row>
          <Col md={7}>
            <AddTodo />
          </Col>
          <Col md={5}>
            <h5>List toggle</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
