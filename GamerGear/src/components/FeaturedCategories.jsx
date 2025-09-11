import React from 'react';

function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'Gaming Headsets',
      image: 'https://via.placeholder.com/200x200?text=Headsets',
      description: 'Immersive audio experience for your games'
    },
    {
      id: 2,
      name: 'Gaming Keyboards',
      image: 'https://via.placeholder.com/200x200?text=Keyboards',
      description: 'Responsive mechanical keyboards for quick actions'
    },
    {
      id: 3,
      name: 'Gaming Mice',
      image: 'https://via.placeholder.com/200x200?text=Mice',
      description: 'Precision mice for perfect aiming'
    },
    {
      id: 4,
      name: 'Gaming Monitors',
      image: 'https://via.placeholder.com/200x200?text=Monitors',
      description: 'High refresh rate displays for smooth gameplay'
    }
  ];

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop By Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button className="category-btn">Browse</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategories;
