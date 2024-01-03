import React, { useState } from 'react';
import HubSpotForm from '../components/HubSpotForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

const faqs = [
  {
    id: 1,
    question: 'Is there a charge to use this service?',
    answer:
      'Our service is free, but we require a $10 deposit to hold your appointment. The deposit will be credited towards the total charge when it comes time for services.',
  },
  {
    id: 2,
    question: 'Can I pay Haircut Now for my complete services?',
    answer:
      'We don’t take full payment for services; you’ll make your $10 deposit to us and then pay the service provider the difference.',
  },
  {
    id: 3,
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things happen so please cancel your appointment more than one hour before the scheduled time. Your deposit will be forfeited in the event you do not show up for an upcoming appointment, less than 1hr of notice is given with no announced cancellations beforehand.',
  },
  {
    id: 4,
    question: 'How do I contact my barber or stylist If I have questions?',
    answer:
      'Once your appointment is scheduled you will be able to chat with your barber or stylist within the app.',
  },
  {
    id: 5,
    question: 'How far out can I schedule an appointment?',
    answer:
      'All appointments must be scheduled within two hours of your request because we offer a same-day, last minute appointment service',
  },
  {
    id: 6,
    question: 'Is my $10 deposit deducted from the final cost of the service?',
    answer:
      'Yes, the deposit will be credited towards the total charge when it comes time for services.',
  },
  {
    id: 7,
    question:
      'Do the barbers or stylist accept credit cards, debit cards, cash app, Zelle, etc.?',
    answer:
      'If you have any questions about the acceptable forms of payment, please contact the service provider using our chat feature which will become available after you schedule your appointment.',
  },
  {
    id: 8,
    question:
      'Is a $10 deposit required for each person when I book multiple people at once?',
    answer: 'No, we collect $10 for each session booked not for each person.',
  },
  // Add more FAQs here
];

export default function Lessons() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

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

            <h1 className="display-3">FAQ</h1>
          </center>
        </div>
      </div>
      <div style={MainStyle}>
        <Container>
          <div>
            {faqs.map((faq) => (
              <Card key={faq.id}>
                <Button
                  color="link"
                  onClick={() => toggle(faq.id)}
                  style={{ marginBottom: '1rem' }}
                >
                  {faq.question}
                </Button>
                <Collapse isOpen={open === faq.id}>
                  <CardBody>{faq.answer}</CardBody>
                </Collapse>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </BaseLayout>
  );
}
