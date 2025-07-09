
export const Reviews = () => {
  const reviews = [
    {
      name: "Jennifer Martinez",
      rating: 5,
      review: "Amazing gym with top-notch equipment and incredibly supportive staff. I've achieved results I never thought possible!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ba?w=200&q=80"
    },
    {
      name: "Robert Kim",
      rating: 5,
      review: "The trainers here are exceptional. They created a personalized program that helped me lose 30 pounds in 6 months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      review: "Best gym in the city! Clean facilities, modern equipment, and a community that motivates you to push your limits.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    },
    {
      name: "Marcus Johnson",
      rating: 4,
      review: "Great variety of classes and equipment. The staff is knowledgeable and always willing to help with proper form.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600">
            Real stories from real people who transformed their lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover-scale transition-all duration-300 animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
