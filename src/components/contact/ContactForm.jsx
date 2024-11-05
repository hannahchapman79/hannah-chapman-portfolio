import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
        <div className='name-email'>
      <Form.Group className="mb-3">
        <Form.Control type="name" placeholder="Your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your email" />
      </Form.Group>
      </div>

      <Form.Group className="mb-3">
        <Form.Control type="subject" placeholder="Your subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Your message" rows={5} />
      </Form.Group>

      <Button variant="primary" type="submit" className='outline-button'>
        Send
      </Button>
    </Form>
  );
}

export default ContactForm;