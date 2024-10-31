import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
   return (
    <section className='contact-page'>
      <div className='contact'>
        <h1 className='contact-intro'>Let&apos;s bring ideas to life.</h1>
        <p className='contact-message'>Drop me a message, and I&apos;ll reach out to you soon.</p>
        <section className='contact-form'>
          <ContactForm />
        </section>
      </div>
    </section>
   );
};

export default Contact;