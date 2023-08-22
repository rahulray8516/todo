// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <ContainerFluidExample/>
    </div>
  );
}


function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <p>
          <MyButton/>
          
        </p>
        <MyButton/>
        </Col>
      </Row>
    </Container>
  );
}

function MyButton(){
  return (
    <Button>Click Here !</Button>
  )
}

export default App;
