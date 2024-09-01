import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://servernodemil.onrender.com/send-email', { // Update the URL if your backend runs on a different port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            setError('There was an error sending your message. Please try again later.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
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
            <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center"
                disabled={isSubmitting}
            >
                <FaEnvelope className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </form>
    );
};

export default ContactForm;
