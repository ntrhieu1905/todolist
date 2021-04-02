import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { AddTodoType } from '../../types/todo';

type Props = {
  saveTodo: (todo: AddTodoType) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const { control, register, handleSubmit } = useForm<AddTodoType>();

  const addTodo = (data: AddTodoType) => {
    saveTodo(data);
  }

  return (
    <>
      <Card>
        <h5 className="text-center mt-3">Add Todo</h5>
        <Card.Body>
          <Form onSubmit={handleSubmit(addTodo)}>
            <Form.Group as={Row} controlId="title">
              <Form.Label column sm="2">
                Title
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  ref={register}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="content">
              <Form.Label column sm="2">
                Content
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  name="content"
                  rows={3}
                  placeholder="Enter content"
                  ref={register}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2" htmlFor="startDate">
                Start Date
              </Form.Label>
              <Col sm="4">
                <Controller
                  control={control}
                  name="startDate"
                  defaultValue={new Date()}
                  render={({ onChange, value }) => (
                    <DatePicker
                      className="form-control"
                      dateFormat="dd-MM-yyyy"
                      onChange={onChange}
                      selected={value}
                    />
                  )}
                />
              </Col>
              <Form.Label column sm="2" htmlFor="endDate">
                End Date
              </Form.Label>
              <Col sm="4">
                <Controller
                  control={control}
                  name="endDate"
                  defaultValue={new Date()}
                  render={({ onChange, value }) => (
                    <DatePicker
                      className="form-control"
                      dateFormat="dd-MM-yyyy"
                      onChange={onChange}
                      selected={value}
                    />
                  )}
                />
              </Col>
            </Form.Group>
            <Row>
              <Col sm="12" className="text-center">
                <Button type="submit" variant="primary">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddTodo;
