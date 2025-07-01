// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-5">
        For inquiries, support, or feedback, please reach out using the details below.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h5 className="mb-3">Office of Career Services</h5>
            <p><i className="fas fa-map-marker-alt"></i> Mohammad Ali Jinnah University, Karachi, Pakistan</p>
            <p><i className="fas fa-phone"></i> +92 21 111 87 87 87 (MAJU)</p>
            <p><i className="fas fa-envelope"></i> career.services@jinnah.edu.pk</p>

            <h6 className="mt-4">Social Media</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-dark"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;