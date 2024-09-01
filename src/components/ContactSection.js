import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  );
  export default ContactSection;