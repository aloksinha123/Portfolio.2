import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    isError: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', isError: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        message: 'Message sent successfully!',
        isError: false
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        message: error.message || 'Failed to send message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="contact-page-main">
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-title">Let's <span className="highlight">talk</span></h1>
            <p className="contact-subtitle">
              To request a quote or want to meet up for coffee, contact me directly or 
              fill out the form and I will get back to you soon.
            </p>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                {status.message && (
                  <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                    {status.message}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="form-input"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className="form-input"
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    className="form-input message-input"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}