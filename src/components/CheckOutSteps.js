import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>1</Col>
      <Col className={props.step2 ? 'active' : ''}>2</Col>
      <Col className={props.step3 ? 'active' : ''}>3</Col>
    </Row>
  );
}