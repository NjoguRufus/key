import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center">
          <FaEnvelope className="mr-2" />
          Send Message
        </button>
      </form>
    );
  };
  export default ContactForm;