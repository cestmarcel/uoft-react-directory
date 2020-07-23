import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import EmployeeTable from "./components/EmployeeTable";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-5">Employee Overview</h1>
      <Form>
        <Form.Group as={Row} controlId="formEmployeeSearch">
          <Form.Label column sm={2}>
            Employee search
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Your search term goes here" />
          </Col>
        </Form.Group>
      </Form>
      <EmployeeTable />
    </Container>
  );
}

export default App;
