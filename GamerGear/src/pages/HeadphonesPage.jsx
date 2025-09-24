import React from 'react';

const HeadphonesPage = () => {
  const headphoneProducts = [
    {
      id: 1,
      name: "Pro Gaming Headset 7.1",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop&crop=center",
      features: ["7.1 Surround Sound", "Noise Cancelling", "RGB Lighting", "Retractable Mic"]
    },
    {
      id: 2,
      name: "Wireless Gaming Headphones",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&crop=center",
      features: ["Wireless Freedom", "50mm Drivers", "30H Battery", "Quick Charge"]
    },
    {
      id: 3,
      name: "Audiophile Gaming Headset",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&crop=center",
      features: ["Hi-Fi Audio", "Open-Back Design", "Studio Grade", "Velour Pads"]
    },
    {
      id: 4,
      name: "Compact Gaming Earbuds",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop&crop=center",
      features: ["True Wireless", "Low Latency", "Gaming Mode", "Portable Case"]
    },
    {
      id: 5,
      name: "Esports Pro Headset",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
      features: ["Tournament Grade", "Crystal Clear Mic", "Lightweight", "Pro Certified"]
    },
    {
      id: 6,
      name: "Budget Gaming Headset",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop&crop=center",
      features: ["Comfortable Fit", "Clear Audio", "Adjustable Mic", "Multi-Platform"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🎧 Gaming Headphones & Headsets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Immerse yourself in crystal-clear audio with our premium gaming headphones and headsets. 
            From competitive esports to casual gaming, experience every detail with exceptional sound quality.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            All Headphones
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Wireless
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            With Microphone
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            7.1 Surround
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Noise Cancelling
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {headphoneProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg transition-colors duration-200 font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-8 py-3 rounded-lg transition-colors duration-200">
            Load More Headphones
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadphonesPage;