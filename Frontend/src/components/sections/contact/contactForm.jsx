import React, { useState } from 'react';
import axios from 'axios';
import { RiMailLine } from '@remixicon/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Send the form data to the backend
            await axios.post('https://portfolio-2aj3-qc93f08o1-optislugprank11-gmailcoms-projects.vercel.app/send-email', formData);
            setSuccessMessage('Message sent successfully!');
        } catch (error) {
            setSuccessMessage('Error sending message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="form-control" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="John Doe" 
                                    required 
                                    data-error="Please enter your Name" 
                                />
                                <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="form-control" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="abc@websitename.com" 
                                    required 
                                    data-error="Please enter your Email" 
                                />
                                <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="form-control" 
                                    rows="4" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    placeholder="Write Your message" 
                                    required 
                                    data-error="Please Write your Message">
                                </textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button 
                                    type="submit" 
                                    className="theme-btn" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Me Message'} <i><RiMailLine size={16} /></i>
                                </button>
                                <div id="msgSubmit" className="hidden"></div>
                            </div>
                        </div>
                    </div>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
