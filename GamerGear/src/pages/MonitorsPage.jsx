import React from 'react';

const MonitorsPage = () => {

  const monitorProducts = [
    {
      id: 1,
      name: "27\" 4K Gaming Monitor",
      price: "$599.99",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop&crop=center",
      features: ["4K UHD Resolution", "144Hz Refresh Rate", "1ms Response Time", "HDR Support"]
    },
    {
      id: 2,
      name: "34\" Ultrawide Curved Monitor",
      price: "$799.99",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop&crop=center",
      features: ["34\" Ultrawide", "3440x1440", "Curved Display", "USB-C Hub"]
    },
    {
      id: 3,
      name: "24\" 240Hz Esports Monitor",
      price: "$449.99",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=500&fit=crop&crop=center",
      features: ["240Hz Refresh Rate", "0.5ms Response", "G-Sync Compatible", "Tournament Grade"]
    },
    {
      id: 4,
      name: "32\" 4K Creator Monitor",
      price: "$899.99",
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&h=500&fit=crop&crop=center",
      features: ["32\" 4K Display", "99% sRGB", "Color Accurate", "Height Adjustable"]
    },
    {
      id: 5,
      name: "Dual Monitor Setup Kit",
      price: "$649.99",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=500&fit=crop&crop=center",
      features: ["Dual 24\" Monitors", "Matching Bezels", "Dual Monitor Arm", "Complete Setup"]
    },
    {
      id: 6,
      name: "Budget Gaming Monitor",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&h=500&fit=crop&crop=center",
      features: ["24\" Full HD", "75Hz Refresh", "FreeSync", "VESA Mount"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🖥️ Gaming Monitors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Elevate your gaming experience with our premium gaming monitors. 
            From ultra-fast refresh rates to stunning 4K displays, see every detail with crystal clarity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            All Monitors
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            4K
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Ultrawide
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            High Refresh
          </button>
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Curved
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monitorProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkTheme ? 'bg-gray-800' : 'bg-white'
              }`}
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
            Load More Monitors
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonitorsPage;