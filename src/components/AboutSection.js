import React from 'react';
import maju from '../assets/maju.png';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">About <span>Mohammad Ali Jinnah University</span></h2>
            <p className="section-description">
              Mohammad Ali Jinnah University is committed to excellence in education, research, and student development.
              Our Graduation Directory serves as a platform to showcase the achievements of our students and alumni.
              Connect with the best talent and explore their journeys.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={maju} alt="About MAJU" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
