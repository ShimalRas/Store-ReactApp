import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/150x150?text=AJ',
      rating: 5,
      text: 'The quality of GamerGear products is unmatched. My gaming setup has never been more complete and professional.',
      role: 'Pro Gamer'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      avatar: 'https://via.placeholder.com/150x150?text=SM',
      rating: 4,
      text: 'Fast shipping and excellent customer service. The gaming keyboard exceeded my expectations in both quality and performance.',
      role: 'Streamer'
    },
    {
      id: 3,
      name: 'David Kim',
      avatar: 'https://via.placeholder.com/150x150?text=DK',
      rating: 5,
      text: 'As a professional e-sports player, I rely on top-quality gear. GamerGear has been my go-to store for years now.',
      role: 'E-Sports Competitor'
    }
  ];

  // Function to generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What Gamers Say</h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from our community of dedicated gamers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-light"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary-light">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <svg 
                    className="absolute top-0 left-0 w-10 h-10 text-gray-200 dark:text-gray-600 -mt-3 -ml-3 opacity-50"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.249 8.404 3.1 8.904 3.1 9.441v.259h.002c0 .371.183.685.41.899.232.205.53.307.86.307h.344C5.261 10.404 5.877 10 6.5 10zM18.064 9.441c0-.537-.149-1.037-.416-1.518-.254-.429-.58-.804-.909-1.162-.302-.383-.711-.645-1.05-.945-.343-.292-.747-.475-1.091-.692-.342-.229-.71-.325-1.028-.466-.323-.125-.611-.263-.882-.312-.265-.067-.498-.123-.689-.17-.379-.093-.597-.145-.597-.145l-.301 1.886c0 0 .172.072.474.197.149.062.331.136.539.222.216.069.418.217.65.35.222.148.501.253.714.463.217.201.491.362.692.604.193.249.454.447.601.737.177.27.355.537.469.845.115.212.185.448.254.68-.213-.031-.427-.065-.65-.065C17.123 10 16.507 10.404 16.076 10.906h.344c.33 0 .628-.102.86-.307.227-.214.41-.528.41-.899v-.259h.374zM12 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L15.258 4.03c0 0-.218.052-.597.144-.191.047-.424.104-.689.17-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C8.749 8.404 8.6 8.904 8.6 9.441v.259h.002c0 .371.183.685.41.899.232.205.53.307.86.307h.344C10.761 10.404 11.377 10 12 10zM15 14c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L18.258 8.03c0 0-.218.052-.597.144-.191.047-.424.104-.689.17-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.267.48-.416.98-.416 1.518v.259h.002c0 .371.183.685.41.899.232.205.53.307.86.307h.344C13.761 14.404 14.377 14 15 14zM9 14c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L12.258 8.03c0 0-.218.052-.597.144-.191.047-.424.104-.689.17-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.267.48-.416.98-.416 1.518v.259h.002c0 .371.183.685.41.899.232.205.53.307.86.307h.344C7.761 14.404 8.377 14 9 14z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300 pl-2">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 px-6 py-3">
                <button className="text-primary-light hover:text-primary-dark transition-colors duration-200 text-sm">
                  Read full review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
