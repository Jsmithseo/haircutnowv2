import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
} from 'reactstrap';
import DeviceTab from './DeviceTab';

const ctaModalTwo = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Download App
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Scan QR Code</ModalHeader>
        <ModalBody>
          <center>
            <Col>
              https://apps.apple.com/us/app/haircut-now-biz/id1599672279?uo=4
            </Col>
            <Col>
              https://apps.apple.com/us/app/haircut-now-biz/id1599672279?uo=4
            </Col>
            <Col>
              https://play.google.com/store/apps/details?id=com.haircutnowbiz&hl=en_US&gl=US
            </Col>
            <Col>
              https://play.google.com/store/apps/details?id=com.haircutnow&hl=en_US&gl=US
            </Col>
          </center>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ctaModalTwo;
