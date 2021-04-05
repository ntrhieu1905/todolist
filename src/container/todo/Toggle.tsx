import React, { useCallback } from 'react';
import { Card, Row, Col, Nav } from 'react-bootstrap';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AddTodoType } from '../../types/todo';
import { addTodo } from './Todo.actions';
import { RootState } from '../../redux/reducers';
import AddTodo from './Add';
import TodoItems from './Items';

const ListToggleTodo: React.FC = () => {
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
    (todo: AddTodoType) => dispatch(addTodo(todo)),
    [dispatch]
  );
  return (
    <>
      <Row>
        <Col md={6}>
          <AddTodo saveTodo={saveTodo} />
        </Col>
        <Col md={6}>
          <Card className="mb-5" style={{ 'height': '400px' }}>
            <h5 className="text-center mt-3">Todo List Toggle</h5>
            <Nav
              variant="pills"
              defaultActiveKey="assinged"
              className="justify-content-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="assinged">Assinged</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="completed">Completed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="deleted">Deleted</Nav.Link>
              </Nav.Item>
            </Nav>
            <Card.Body>
              {
                !isLoading
                  ? (
                    <TodoItems todos={todos} />
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
