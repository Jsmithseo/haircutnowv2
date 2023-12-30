import React from 'react';
import Image from 'next/image';

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import { Container, FormGroup, Label, Input } from 'reactstrap';

import { Row, Col, Button } from 'reactstrap';
import BaseLayout from './components/layouts/BaseLayouts.js';
import Modal from './components/Modal.js';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };

  return (
    <BaseLayout>
      <div className="video-background">
        <video controls playsinline loop autoPlay muted className="video">
          <source src="/bannerVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <h2 className="aboutTitleMobile">The HairCut Now App</h2> */}
        <center>
          <div className="bannerContent">
            <h3>The HairCut Now App</h3>
            <p>
              Clients can find nearby barbers available immediately or within
              the next two hours, eliminating the need for long waits.
            </p>
            {/* <FormGroup>
              <Input
                type="number"
                name="number"
                id="exampleEmail"
                placeholder="Enter your phone number"
              />
            </FormGroup> */}
            <Modal />
          </div>
        </center>
      </div>

      <Container>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="6" lg="offset-4">
            <h2 className="aboutTitle">On-Demand Haircuts</h2>
            <p>
              Clients using our platform have the convenience of finding nearby
              barbers who are available for immediate appointments or within the
              next two hours. This feature effectively eliminates the
              frustration of long waiting times often associated with
              traditional barber visits. By integrating real-time availability
              and location-based services, we ensure that clients can
              effortlessly locate and book a barber at a moment's notice.
            </p>
          </Col>
          <h2 className="aboutTitleMobile">On-Demand Haircuts</h2>
          <Col xs="12" sm="12" md="6" lg="offset-4" xl="offset-4">
            <img
              src="/On-Demand.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
        </Row>
        <br></br>
        <Row className="lessonSection">
          <Col xs="12" sm="12" md="6" lg="6">
            <div className="desktopView">
              <img
                src="/customize.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <h2 className="lessonTitle">Customized Search</h2>
            <div className="mobileView">
              <img
                src="/customize.png" // Replace with your image path
                alt="Image"
                className="img-fluid lesson"
              />
            </div>

            <p>
              Our platform offers clients the unique ability to tailor their
              barber search according to their specific needs by setting their
              desired appointment time and budget. This personalized approach
              ensures that clients find a barber who not only fits their
              schedule but also aligns with their financial preferences.
            </p>
          </Col>
        </Row>
        <Row className="lessonSection">
          <div></div>
          <Col xs="12" sm="12" md="6" lg="6">
            <h2 className="lessonTitle">Barber Profiles</h2>
            <div className="mobileView">
              <img
                src="/profiles.png" // Replace with your image path
                alt="Image"
                className="img-fluid lesson"
              />
            </div>

            <p>
              Our app significantly aids the client's decision-making process by
              offering detailed profiles for each barber. These profiles include
              extensive photo galleries and a compilation of reviews from past
              clients, offering a thorough perspective on the barber’s expertise
              and client satisfaction. This feature empowers clients to make
              informed and confident choices when selecting their barber.
            </p>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <div className="desktopView">
              <img
                src="/profiles.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Row className="lessonSection">
          <div></div>
          <Col xs="12" sm="12" md="6" lg="6">
            <div className="desktopView">
              <img
                src="/payments.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col xs="12" sm="12" md="6" lg="6">
            <h2 className="lessonTitle">Secure Payments</h2>
            <div className="mobileView">
              <img
                src="/payments.png" // Replace with your image path
                alt="Image"
                className="img-fluid lesson"
              />
            </div>
            <p>
              The app incorporates a secure and user-friendly payment system,
              designed to enhance the booking experience for clients. This
              feature includes the option for clients to secure their
              appointments with a minimal deposit of $10. Here’s how this adds
              value to the user experience:
            </p>
          </Col>
        </Row>
      </Container>
      <div className="instagramFeed">here</div>
    </BaseLayout>
  );
}
