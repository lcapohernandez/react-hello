import React from 'react';
import Card from './Card';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="John Doe"
              text="This company is amazing!"
              image="path_to_image_john.jpg"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Jane Smith"
              text="I've never seen such great service!"
              image="path_to_image_jane.jpg"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Bob Johnson"
              text="Highly recommend their services."
              image="path_to_image_bob.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
