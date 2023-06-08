import { Container, Row, Col, Button } from 'react-bootstrap';

const Container1 = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderRadius: '16px',
        paddingTop: '400px',
        paddingBottom: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Row className="justify-content-center">
        <Col xs="auto" className="text-center">
          <Button
            variant="outline-light"
            style={{
              borderRadius: '10px',
              margin: '5px',
              padding: '10px 20px',
              opacity: '1',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            Log In
          </Button>
        </Col>
        <Col xs="auto" className="text-center">
          <Button
            variant="outline-light"
            style={{
              borderRadius: '10px',
              margin: '5px',
              padding: '10px 20px',
              opacity: '1',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Container1;