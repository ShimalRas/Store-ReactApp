import React from 'react';

const KeyboardsPage = () => {

  const keyboardProducts = [
    {
      id: 1,
      name: "Mechanical Gaming Keyboard RGB",
      price: "$129.99",
      image: "/images/keyboard/618A+B25MKL._AC_UY218_.jpg",
      features: ["RGB Backlight", "Mechanical Switches", "Programmable Keys", "Anti-Ghosting"]
    },
    {
      id: 2,
      name: "Wireless Gaming Keyboard",
      price: "$89.99",
      image: "/images/keyboard/61hOhuiqrTL._AC_UY218_.jpg",
      features: ["2.4GHz Wireless", "Low Profile Keys", "Long Battery Life", "Compact Design"]
    },
    {
      id: 3,
      name: "Pro Mechanical Keyboard",
      price: "$199.99",
      image: "/images/keyboard/61LcZpKWW-L._AC_UY218_.jpg",
      features: ["Cherry MX Switches", "Aluminum Frame", "Custom Keycaps", "USB-C"]
    },
    {
      id: 4,
      name: "TKL Gaming Keyboard",
      price: "$79.99",
      image: "/images/keyboard/61MC8BK0w0L._AC_UY218_.jpg",
      features: ["Tenkeyless Design", "RGB Effects", "N-Key Rollover", "Detachable Cable"]
    },
    {
      id: 5,
      name: "60% Compact Keyboard",
      price: "$149.99",
      image: "/images/keyboard/61RM1rMoceL._AC_UY218_.jpg",
      features: ["60% Layout", "Hot-Swappable", "Gasket Mount", "Premium Build"]
    },
    {
      id: 6,
      name: "Membrane Gaming Keyboard",
      price: "$39.99",
      image: "/images/keyboard/61x7xKdrBHL._AC_UY218_.jpg",
      features: ["Rainbow Backlight", "Quiet Keys", "Spill Resistant", "Budget Friendly"]
    },
    {
      id: 7,
      name: "Premium Mechanical Keyboard",
      price: "$249.99",
      image: "/images/keyboard/61YdGCfiwEL._AC_UY218_.jpg",
      features: ["Premium Switches", "Aluminum Body", "Per-Key RGB", "Media Controls"]
    },
    {
      id: 8,
      name: "Gaming Keyboard with Wrist Rest",
      price: "$109.99",
      image: "/images/keyboard/714WvRlURgL._AC_UY218_.jpg",
      features: ["Wrist Rest", "Macro Keys", "Gaming Mode", "Anti-Ghosting"]
    },
    {
      id: 9,
      name: "Compact Gaming Keyboard",
      price: "$79.99",
      image: "/images/keyboard/71LEUu+OKUL._AC_UY218_.jpg",
      features: ["Space Saving", "Mechanical Keys", "RGB Backlight", "USB Passthrough"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🎮 Gaming Keyboards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our premium collection of gaming keyboards designed for performance, comfort, and style. 
            From mechanical switches to wireless freedom, find your perfect typing companion.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            All Keyboards
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Mechanical
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Wireless
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            RGB
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Compact
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyboardProducts.map((product) => (
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
            Load More Keyboards
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyboardsPage;