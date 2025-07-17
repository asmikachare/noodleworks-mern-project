import React, { useState } from 'react';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://noodleworks-backend.onrender.com/api' 
  : 'http://localhost:3001/api';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setStatus({ type: 'loading', message: 'Submitting...' });
            
            console.log('Submitting data:', formData);
            
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            console.log('Response received:', response.status);
            
            if (response.ok) {
                try {
                    const data = await response.json();
                    console.log('Success data:', data);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setStatus({ type: 'success', message: 'Thank you for your message!' });
                } catch (parseError) {
                    console.error('Error parsing success response:', parseError);
                    setStatus({ type: 'success', message: 'Thank you for your message!' });
                }
            } else {
                const errorStatus = response.status;
                let errorText = `Error (${errorStatus}): Something went wrong. Please try again.`;
                
                try {
                    const errorData = await response.text();
                    console.error('Error response text:', errorData);
                } catch (parseError) {
                    console.error('Error reading error response:', parseError);
                }
                
                setStatus({ type: 'error', message: errorText });
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus({ type: 'error', message: 'Connection error: ' + error.message });
        }
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1>Contact Us</h1>
                <p>Fill out the form below to get in touch with our team.</p>

                {status.message && (
                    <div className={`status-message ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={status.type === 'loading'}>
                        {status.type === 'loading' ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;