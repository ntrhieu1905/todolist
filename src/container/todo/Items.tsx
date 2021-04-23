import React from 'react';
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { ITodoMain, DeletedTodoType, CompletedTodoType, Status } from '../../types/todo';
import { deleteTodo, completeTodo } from './Todo.actions';

// components
import CustomAccordionToggle from '../../components/accordion/CustomAccordionToggle';

type Props = {
  todos: ITodoMain[],
  status: Status
}

const TodoItems: React.FC<Props> = ({ todos, status }) => {
  const dispatch = useDispatch();
  const handleDeleteTodoItem = (id: string) => {
    const datas: DeletedTodoType = {
      id,
      status: Status.deleted,
    };
    dispatch(deleteTodo(datas));
  }
  const handleCompleteTodoItem = (id: string) => {
    const datas: CompletedTodoType = {
      id,
      status: Status.completed,
    };
    dispatch(completeTodo(datas));
  }
  // eslint-disable-next-line array-callback-return
  const template = todos.map((todo: ITodoMain) => {
    if (todo.status === status) {
      return (
        (
          <Card key={todo.id}>
            <Card.Header>
              <div className="d-inline-block text-break">
                {todo.title}
              </div>
              <div className="mt-2 d-flex">
                <CustomAccordionToggle eventKey={todo.id} />
                <div className="ml-auto">
                  <Button variant="info" size="sm" className="mr-2">Edit</Button>
                  <Button variant="success" size="sm" className="mr-2" onClick={() => handleCompleteTodoItem(todo.id)}>Done</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteTodoItem(todo.id)}>Delete</Button>
                </div>
              </div>
            </Card.Header>
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
        )
      )
    }
  })
  return (
    <>
      <Accordion defaultActiveKey="0" style={{ 'maxHeight': '100%', 'overflowY': 'auto' }}>
        {
          template
        }
      </Accordion>
    </>
  )
}

export default TodoItems;