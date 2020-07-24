import React, { useState } from 'react';
import Header from './components/Header/Header';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageSources from "./components/ImageSources";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header />
      <Container>
        <h1 className="mt-5 mb-5">Employee Overview</h1>
        <Form>
          <Form.Group as={Row} controlId="formEmployeeSearch">
            <Form.Label column sm={2}>
              Employee search
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Employee name" onChange={(event) => setSearchTerm(event.target.value)}/>
            </Col>
          </Form.Group>
        </Form>
        <EmployeeTable searchTerm={searchTerm} />
        <ImageSources />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
