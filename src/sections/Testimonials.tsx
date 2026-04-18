import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Great service and friendly staff!",
    name: "Alice",
    rating: 5
  },
  {
    quote: "My car looks brand new! Highly recommend!",
    name: "Bob",
    rating: 5
  },
  {
    quote: "Excellent detailing service. Will use again!",
    name: "Charlie",
    rating: 5
  },
  {
    quote: "Professional and thorough. Very satisfied!",
    name: "David",
    rating: 5
  },
  {
    quote: "Best detailing experience I've had.",
    name: "Eva",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className='testimonial'>
            <p>"{testimonial.quote}"</p>
            <h5>{testimonial.name}</h5>
            <div className='rating'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} color='gold' />
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Testimonials;