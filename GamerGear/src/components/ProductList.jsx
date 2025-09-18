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
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden group">
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
        />
        
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="bg-red-600 text-white py-1 px-4 rounded-full font-bold">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Quick actions overlay - appears on hover */}
        {product.inStock && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="flex gap-2">
              <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-primary-light hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-primary-light hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Product category badge */}
      <div className="px-4 pt-4">
        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium py-1 px-2 rounded-full">
          {product.category}
        </span>
      </div>
      
      {/* Product info */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Add to cart button */}
      <div className="p-4 pt-0">
        <button 
          className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-colors duration-200 
            ${product.inStock 
              ? 'bg-primary-light hover:bg-primary-dark' 
              : 'bg-gray-400 cursor-not-allowed'}`
          }
          disabled={!product.inStock}
        >
          {product.inStock ? (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add to Cart
            </span>
          ) : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <section className="py-12" id="products">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Gaming Gear</h2>
        <div className="w-24 h-1 bg-primary-light mx-auto"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="px-4 py-2 rounded-full bg-primary-light text-white font-medium hover:bg-primary-dark transition-colors duration-200">
          All
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
          Peripherals
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
          Monitors
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
          Audio
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
          Accessories
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
