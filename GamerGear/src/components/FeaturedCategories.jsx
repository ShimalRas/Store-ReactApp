import React from 'react';

function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'Gaming Headsets',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Immersive audio experience for your games',
      bgColor: 'bg-purple-600',
      count: '24 Products'
    },
    {
      id: 2,
      name: 'Gaming Keyboards',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Responsive mechanical keyboards for quick actions',
      bgColor: 'bg-blue-600',
      count: '32 Products'
    },
    {
      id: 3,
      name: 'Gaming Mice',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Precision mice for perfect aiming',
      bgColor: 'bg-red-600',
      count: '18 Products'
    },
    {
      id: 4,
      name: 'Gaming Monitors',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'High refresh rate displays for smooth gameplay',
      bgColor: 'bg-green-600',
      count: '15 Products'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shop By Category</h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our premium selection of gaming gear by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div 
              key={category.id}
              className="group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`relative overflow-hidden ${category.bgColor} h-48`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                  {category.count}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <button 
                    className="px-4 py-2 bg-primary-light hover:bg-primary-dark text-white rounded-md font-medium transition-colors duration-200"
                  >
                    Browse
                  </button>
                  <a 
                    href="#" 
                    className="text-primary-light hover:text-primary-dark font-medium flex items-center transition-colors duration-200"
                  >
                    View All
                    <svg 
                      className="w-4 h-4 ml-1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light">
            Explore All Categories
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
