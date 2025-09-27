import React from 'react';

const MicePage = () => {

  const miceProducts = [
    {
      id: 1,
      name: "Pro Gaming Mouse RGB",
      price: "$79.99",
      image: "/images/mouse/411Ke19KUFL._AC_UY218_.jpg",
      features: ["16000 DPI", "RGB Lighting", "Programmable Buttons", "Ergonomic Design"]
    },
    {
      id: 2,
      name: "Wireless Gaming Mouse",
      price: "$59.99",
      image: "/images/mouse/41bkEasx4AL._AC_UY218_.jpg",
      features: ["2.4GHz Wireless", "Ultra-Light", "Long Battery", "High Precision"]
    },
    {
      id: 3,
      name: "MMO Gaming Mouse",
      price: "$99.99",
      image: "/images/mouse/514Ba-DbYNL._AC_UY218_.jpg",
      features: ["12 Side Buttons", "Macro Support", "Adjustable Weight", "Premium Sensor"]
    },
    {
      id: 4,
      name: "Ambidextrous Gaming Mouse",
      price: "$49.99",
      image: "/images/mouse/51gJXPR14FL._AC_UY218_.jpg",
      features: ["Ambidextrous Design", "Optical Sensor", "Customizable", "Lightweight"]
    },
    {
      id: 5,
      name: "Ultra Light Gaming Mouse",
      price: "$89.99",
      image: "/images/mouse/51UCF1KOnKL._AC_UY218_.jpg",
      features: ["Ultra Lightweight", "Honeycomb Shell", "Paracord Cable", "PTFE Feet"]
    },
    {
      id: 6,
      name: "Budget Gaming Mouse",
      price: "$29.99",
      image: "/images/mouse/51xIj85RktL._AC_UY218_.jpg",
      features: ["6400 DPI", "LED Backlight", "6 Buttons", "Comfortable Grip"]
    },
    {
      id: 7,
      name: "Professional Gaming Mouse",
      price: "$119.99",
      image: "/images/mouse/617QXc+mW9L._AC_UY218_.jpg",
      features: ["25600 DPI", "Wireless/Wired", "Programmable", "Tournament Ready"]
    },
    {
      id: 8,
      name: "Ergonomic Gaming Mouse",
      price: "$69.99",
      image: "/images/mouse/61aBUvuPtPL._AC_UY218_.jpg",
      features: ["Ergonomic Grip", "High Precision", "RGB Lighting", "Long Battery"]
    },
    {
      id: 9,
      name: "Compact Gaming Mouse",
      price: "$45.99",
      image: "/images/mouse/61AcT0ZuO3L._AC_UY218_.jpg",
      features: ["Compact Design", "Travel Friendly", "Optical Sensor", "USB-C Charging"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🖱️ Gaming Mice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Precision meets performance in our curated collection of gaming mice. 
            From ultra-light designs to feature-packed MMO mice, achieve pixel-perfect accuracy in every game.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            All Mice
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Wireless
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Ultra Light
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            MMO
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            RGB
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miceProducts.map((product) => (
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
            Load More Mice
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicePage;