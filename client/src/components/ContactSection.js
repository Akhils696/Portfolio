import React from "react";
import "./ContactSection.css";

const ContactSection = ({ contact }) => {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card">
        <div>
          <p className="contact-label">Next Step</p>
          <h2 className="contact-title">{contact.heading}</h2>
          <p className="contact-description">{contact.description}</p>
        </div>
        <div className="contact-actions">
          <a href={contact.primaryCta.href} className="contact-action primary-contact-action">
            {contact.primaryCta.label}
          </a>
          <a
            href={contact.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action secondary-contact-action"
          >
            {contact.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
