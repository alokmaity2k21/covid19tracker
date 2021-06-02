import { Button, Col, Container, Row } from "react-bootstrap";
const NotFound = ({ history }) => {
  return (
    <Container className="align-middle" style={{ marginTop: "50px" }}>
      <Row className="justify-content center">
        <Col md={12} className="text-center">
          <span className="display-1 d-block">404</span>
          <div className="md-4 lead">The page not found!</div>
          <Button onClick={() => history.push("/")}>Go To Home Page</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
