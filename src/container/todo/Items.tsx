import React from 'react';
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import { ITodoMain } from '../../types/todo';

type Props = {
  todos: ITodoMain[]
}

const TodoItems: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <Accordion defaultActiveKey="0" style={{ 'maxHeight': '100%', 'overflowY': 'auto' }}>
        {
          todos.map((todo: ITodoMain) => (
            <Card key={todo.id}>
              <Accordion.Toggle as={Card.Header} eventKey={todo.id}>
                <div className="d-inline-block" style={{ 'width': '300px' }}>
                  {todo.title}
                </div>
                <Button variant="danger" className="float-right">Delete</Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={todo.id}>
                <Card.Body>
                  <Row>
                    <Col sm="6">
                      <label>Start Date: {dayjs(todo.startDate).format('DD-MM-YYYY')}</label>
                    </Col>
                    <Col sm="6">
                      <label>End Date: {dayjs(todo.endDate).format('DD-MM-YYYY')}</label>
                    </Col>
                  </Row>
                  {todo.content}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
        }
      </Accordion>
    </>
  )
}

export default TodoItems;