import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DeviceTab from './DeviceTab';

const ctaModal = (props) => {
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
            <DeviceTab />
          </center>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ctaModal;
