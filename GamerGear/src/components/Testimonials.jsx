import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/80x80?text=AJ',
      rating: 5,
      text: 'The quality of GamerGear products is unmatched. My gaming setup has never been more complete and professional.'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      avatar: 'https://via.placeholder.com/80x80?text=SM',
      rating: 4,
      text: 'Fast shipping and excellent customer service. The gaming keyboard exceeded my expectations in both quality and performance.'
    },
    {
      id: 3,
      name: 'David Kim',
      avatar: 'https://via.placeholder.com/80x80?text=DK',
      rating: 5,
      text: 'As a professional e-sports player, I rely on top-quality gear. GamerGear has been my go-to store for years now.'
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Gamers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-header">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <div>
                <h4>{testimonial.name}</h4>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
              </div>
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
