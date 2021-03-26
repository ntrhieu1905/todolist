import React from 'react';
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';

const ListToggleTodo: React.FC = () => {
  return (
    <>
      <Card className="mb-5" style={{'height': '400px'}}>
        <h5 className="text-center mt-3">List Todo Toggle</h5>
        <Card.Body>
          <Accordion defaultActiveKey="0" style={{'maxHeight': '100%', 'overflowY': 'auto'}}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="d-inline-block" style={{'width': '300px'}}>Click me!1</div>
                <Button variant="danger" className="float-right">Delete</Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col sm="6">
                      <label>Start Date: 26-03-2021</label>
                    </Col>
                    <Col sm="6">
                      <label>End Date: 26-03-2021</label>
                    </Col>
                  </Row>
                  <div>
                    Enter content here!!!Enter content here!!!Enter content here!!!
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListToggleTodo;
