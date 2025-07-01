import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-lg-start text-center mb-4 mb-lg-0">
            <h5 className="footer-title">Office of Career Services</h5>
            <p className="footer-text">Mohammad Ali Jinnah University, Karachi, Pakistan</p>
            <p className="footer-contact">
              <i className="fas fa-phone-alt"></i> +92 21 111 87 87 87 (MAJU)
            </p>
            <p className="footer-contact">
              <i className="fas fa-envelope"></i> career.services@jinnah.edu.pk
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-lg-end text-center">
            <h5 className="footer-title">Follow Mohammad Ali Jinnah University</h5>
            <div className="social-icons">
              {['facebook-f', 'linkedin-in', 'instagram', 'twitter', 'youtube', 'globe'].map(icon => (
                <div className="social-wrapper" key={icon}>
                  <a href="#" className="social-icon"><i className={`fab fa-${icon}`}></i></a>
                  <div className="icon-underline"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="footer-bottom">
            &copy; 2025 Mohammad Ali Jinnah University - Powered by MAJU IT <br />
            Developed by <a href="#" target="_blank" className="developer-link">Abdul Moiz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
