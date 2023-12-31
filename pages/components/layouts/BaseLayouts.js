import Header from '../shared/Header';
import { Container, Row, Col } from 'reactstrap';
import Script from 'next/script';
import '../../styles/Home.module.css';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YBR0G33450" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YBR0G33450');
        `}
      </Script>
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <div className="MainFooter">
        <Container>
          <Row>
            <Col md={4}>
              © 2024 HairCut Now, Inc.
              {/* <p>Company</p>
            </Col>
            <Col md={2}>
              <p>Features</p>
            </Col>
            <Col md={2}>
              <p>Resources</p> */}
            </Col>
            <Col md={{ size: 1, offset: 7 }}>
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
