import React, { useState } from 'react';
import {
  Card,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const AddTodo: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setStartDate(date);
    setEndDate(date);
  }

  return (
    <>
      <Card>
        <h5 className="text-center mt-3">Add Todo</h5>
        <Card.Body>
          <Form>
            <Form.Group as={Row} controlId="title">
              <Form.Label column sm="2">
                Title
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="title" placeholder="Enter title" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="content">
              <Form.Label column sm="2">
                Content
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" name="content" rows={3} placeholder="Enter content" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2" htmlFor="startDate">
                Start Date
              </Form.Label>
              <Col sm="4">
                <DatePicker name="startDate" id="startDate" className="form-control" selected={startDate} onChange={handleDateChange} />
              </Col>
              <Form.Label column sm="2" htmlFor="endDate">
                End Date
              </Form.Label>
              <Col sm="4">
                <DatePicker name="endDate" id="endDate" className="form-control" selected={endDate} onChange={handleDateChange} />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddTodo;