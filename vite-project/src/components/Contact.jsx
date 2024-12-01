import React from 'react';
import '../Contact.css'; 

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          At ShoppyGlobe, we’re always happy to hear from our customers. If you have any
          questions, feedback, or inquiries, don’t hesitate to reach out to us. Our
          customer service team is ready to assist you and ensure that your shopping
          experience is smooth and enjoyable. Use the details below to get in touch!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i> {/* Font Awesome phone icon */}
          <p>+1 234 567 890</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> {/* Font Awesome email icon */}
          <p>support@shoppyglobe.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i> {/* Font Awesome address icon */}
          <p>123 Shopping Lane, TechCity, USA</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
