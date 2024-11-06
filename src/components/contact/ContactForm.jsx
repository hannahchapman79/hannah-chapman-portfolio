import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactForm = () => {


  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Message Sent Successfully!');
        },
        (error) => {
          alert('Something went wrong...');
        },
      );
  };


  return (
    <Form ref={form} onSubmit={sendEmail}>
      <div className='name-email'>
        <Form.Group className="mb-3">
          <Form.Control type="name" placeholder="Your name" name="user_name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your email" name="user_email" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3">
        <Form.Control type="subject" placeholder="Your subject" name='user_subject' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Your message" name="message" rows={5} />
      </Form.Group>

      <Button variant="primary" type="submit" value="Send" className='outline-button'>
        Send
      </Button>
    </Form>
  );
}

export default ContactForm;