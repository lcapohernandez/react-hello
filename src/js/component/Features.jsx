import React from 'react';
import Card from './Card';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Feature 1"
              text="This is the first feature description."
              image="path_to_image_1.jpg"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Feature 2"
              text="This is the second feature description."
              image="path_to_image_2.jpg"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Feature 3"
              text="This is the third feature description."
              image="path_to_image_3.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
