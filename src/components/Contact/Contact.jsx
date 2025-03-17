import { useState } from 'react';
import Layout from '../Layout/Layout';
import styles from './contact.module.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;
        const mailtoLink = `mailto:anish@yourdomain.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className={styles.main}>
            <Layout />

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <h2>Send me an email</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}
