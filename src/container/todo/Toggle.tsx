import React from 'react';
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, shallowEqual } from 'react-redux';
import { ITodoMain } from '../../types/todo';
import { TodoState } from './Todo.reducers';

const ListToggleTodo: React.FC = () => {
  const todos: readonly ITodoMain[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  );
  console.log(todos);
  return (
    <>
      <Card className="mb-5" style={{ 'height': '400px' }}>
        <h5 className="text-center mt-3">List Todo Toggle</h5>
        <Card.Body>
          {
            todos ?
              (
                <Accordion defaultActiveKey="0" style={{ 'maxHeight': '100%', 'overflowY': 'auto' }}>
                  {
                    todos.map((todo: ITodoMain) => (
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <div className="d-inline-block" style={{ 'width': '300px' }}>
                            {todo.title}
                          </div>
                          <Button variant="danger" className="float-right">Delete</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Row>
                              <Col sm="6">
                                <label>Start Date: {todo.startDate}</label>
                              </Col>
                              <Col sm="6">
                                <label>End Date: {todo.endDate}</label>
                              </Col>
                            </Row>
                            <div>
                              {todo.content}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    ))
                  }
                </Accordion>
              )
              : 'Loading'
          }
        </Card.Body>
      </Card>
    </>
  );
};

export default ListToggleTodo;
