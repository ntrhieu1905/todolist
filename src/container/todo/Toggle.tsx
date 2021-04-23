import React, { useState, useCallback } from 'react';
import { Card, Row, Col, Nav } from 'react-bootstrap';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AssingedTodoType, Status } from '../../types/todo';
import { assignTodo } from './Todo.actions';
import { RootState } from '../../redux/reducers';
import Todo from './Todo';
import TodoItems from './Items';

const ListToggleTodo: React.FC = () => {
  const [status, setStatus] = useState(Status.assinged);
  const { todos, isLoading } = useSelector(
    (state: RootState) => {
      return {
        todos: state.todo.todos,
        isLoading: state.todo.isLoading
      }
    },
    shallowEqual
  );
  
  const dispatch = useDispatch();
  const saveTodo = useCallback(
    (todo: AssingedTodoType) => dispatch(assignTodo(todo)),
    [dispatch]
  );

  const selectStatus = (param: number) => {
    setStatus(param);
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <Todo saveTodo={saveTodo} />
        </Col>
        <Col md={6}>
          <Card className="mb-5" style={{ 'height': '400px' }}>
            <h5 className="text-center mt-3">Todo List Toggle</h5>
            <Nav
              variant="pills"
              defaultActiveKey={status}
              className="justify-content-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="0" onClick={() => selectStatus(0)}>Assinged</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => selectStatus(1)}>Completed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" onClick={() => selectStatus(2)}>Deleted</Nav.Link>
              </Nav.Item>
            </Nav>
            <Card.Body>
              {
                !isLoading
                  ? (
                    <TodoItems todos={todos} status={status} />
                  )
                  : 'Loading'
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ListToggleTodo;
