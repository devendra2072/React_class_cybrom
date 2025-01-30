import './css/Style.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cybrom = () => {
  return (
    <>
     <Container className="border border-info bg-primary">
      <Row>
        <Col className="border border-info bg-warning">1 of 2</Col>
        <Col className="border border-info bg-danger">2 of 2</Col>
      </Row>
      <Row>
      <Col className="border border-info bg-dark">1 of 2</Col>
        <Col className="border border-info bg-">2 of 3</Col>
        <Col className="border border-info bg-secondary ">1 of 2</Col>
        <Col className="border border-info bg-success ">1 of 2</Col>
      </Row>
      <Row>
      <Col className="border border-info bg-danger">1 of 2</Col>
        <Col className="border border-info bg-success">2 of 3</Col>
        <Col className="border border-info bg-info ">1 of 2</Col>
        
      </Row>
    </Container>
    </>
  );
};
export default Cybrom;
