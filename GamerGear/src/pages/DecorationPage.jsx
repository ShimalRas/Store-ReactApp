import React from 'react';

const DecorationPage = () => {

  const decorationProducts = [
    {
      id: 1,
      name: "RGB LED Strip Kit",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop&crop=center",
      features: ["16.4ft Length", "16M Colors", "Music Sync", "App Control"]
    },
    {
      id: 2,
      name: "Gaming Neon Signs",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&crop=center",
      features: ["Custom Text", "RGB Colors", "Wall Mount", "Low Power"]
    },
    {
      id: 3,
      name: "Floating Game Controller Shelf",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop&crop=center",
      features: ["Holds 4 Controllers", "Floating Design", "Easy Install", "Multiple Colors"]
    },
    {
      id: 4,
      name: "Gaming Posters Set",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=500&fit=crop&crop=center",
      features: ["Set of 6 Posters", "High Quality Print", "Multiple Sizes", "Gaming Themes"]
    },
    {
      id: 5,
      name: "RGB Desktop Lamp",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=center",
      features: ["RGB Lighting", "Touch Control", "USB Powered", "Adjustable Arm"]
    },
    {
      id: 6,
      name: "Gaming Room Flag",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop&crop=center",
      features: ["3x5 Feet", "Durable Material", "Vivid Colors", "Grommets Included"]
    },
    {
      id: 7,
      name: "LED Hexagon Panels",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
      features: ["10 Panel Set", "Touch Sensitive", "Music Reactive", "Modular Design"]
    },
    {
      id: 8,
      name: "Gaming Chair LED Kit",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?w=500&h=500&fit=crop&crop=center",
      features: ["Chair Lighting", "Remote Control", "Battery Powered", "Easy Install"]
    },
    {
      id: 9,
      name: "Retro Arcade Stickers",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=500&fit=crop&crop=center",
      features: ["50+ Stickers", "Waterproof", "Vintage Style", "Laptop/PC Friendly"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🎯 Gaming Decoration & Setup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transform your gaming space into the ultimate battlestation with our collection of decorative items. 
            From RGB lighting to wall art, create an atmosphere that matches your gaming passion.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            All Items
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Lighting
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Wall Art
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Storage
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            RGB
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decorationProducts.map((product) => (
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
            Load More Decoration Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecorationPage;