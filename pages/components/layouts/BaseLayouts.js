import Header from '../shared/Header';
import { Container, Row, Col } from 'reactstrap';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <div className="MainFooter">
        <Container>
          <Row>
            <Col md={2}>
              <p>Company</p>
            </Col>
            <Col md={2}>
              <p>Features</p>
            </Col>
            <Col md={2}>
              <p>Resources</p>
            </Col>
            <Col md={{ size: 3, offset: 3 }}>
              <img
                src="/logo.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BaseLayout;
