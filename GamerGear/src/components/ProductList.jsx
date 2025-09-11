import React from 'react';

const productData = [
  {
    id: 1,
    name: 'RGB Gaming Keyboard',
    price: 149.99,
    image: 'https://via.placeholder.com/300x200?text=Gaming+Keyboard',
    category: 'Peripherals',
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: 'Ultra-Precision Gaming Mouse',
    price: 89.99,
    image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse',
    category: 'Peripherals',
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: '4K Gaming Monitor 144Hz',
    price: 399.99,
    image: 'https://via.placeholder.com/300x200?text=Gaming+Monitor',
    category: 'Monitors',
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: 'Gaming Headset with Noise Cancellation',
    price: 129.99,
    image: 'https://via.placeholder.com/300x200?text=Gaming+Headset',
    category: 'Audio',
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: 'Ergonomic Gaming Chair',
    price: 299.99,
    image: 'https://via.placeholder.com/300x200?text=Gaming+Chair',
    category: 'Furniture',
    rating: 4.5,
    inStock: false
  },
  {
    id: 6,
    name: 'RGB Mouse Pad - Extended',
    price: 49.99,
    image: 'https://via.placeholder.com/300x200?text=RGB+Mouse+Pad',
    category: 'Accessories',
    rating: 4.3,
    inStock: true
  }
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-category">{product.category}</div>
        <div className="product-rating">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="rating-number">({product.rating})</span>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>
      <button className="add-to-cart-btn" disabled={!product.inStock}>
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}

function ProductList() {
  return (
    <section className="products-section" id="products">
      <h2 className="section-title">Featured Gaming Gear</h2>
      <div className="product-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Peripherals</button>
        <button className="filter-btn">Monitors</button>
        <button className="filter-btn">Audio</button>
        <button className="filter-btn">Accessories</button>
      </div>
      <div className="products-grid">
        {productData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
