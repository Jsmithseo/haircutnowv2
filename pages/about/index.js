import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';
import Carousel from '../components/carousel';
import HubSpotContactForm from '../components/HubSptContactForm';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function About() {
  return (
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <center>
            <img
              src="/logo.png" // Replace with your image path
              alt="Image"
              className="img-fluid logo"
            />
            <h1 className="display-3">About Chris</h1>
          </center>
        </div>
      </div>
      <div className="container about">
        <Row>
          <Col md="6">
            <img
              src="/headshot.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          </Col>
          <Col md="6">
            <div className="bio-content">
              <p>
                Chris Curnutt is originally from Oklahoma and began his golf
                journey at 5 years old in a suburb of Tulsa. He grew up playing
                multiple sports, including soccer and baseball, but decided at
                the age of 15 to focus on golf. In high school, Chris was a
                member of his High School team which amassed over 25 wins,
                including 3 consecutive Oklahoma State Championships. After
                attending the University of Arkansas with a major in Education,
                Chris began his career in golf at Shadow Valley CC in
                Bentonville, AR. Here, he was involved in the instruction
                program as well as day to day operations. He continued his
                career at Emerald Falls GC in Broken Arrow, OK, as an Assistant
                Professional. After moving to the Oklahoma City area, Chris
                instructed on a part time basis while pursuing a career in
                restaurant management. 10 years later, Chris and his girlfriend
                Samantha moved to Northern California and the decision was made
                that he would return to teaching full time.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Container>
          <HubSpotContactForm id="HubSpotContactForm" />
        </Container>
      </div>
    </BaseLayout>
  );
}
