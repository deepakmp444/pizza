import Image from 'next/image';
import reviewer1 from "../../public/images/pizza/deepakpizaa.jpeg"
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: reviewer1,
    rating: 5,
    review: "Best pizza I've ever had! The crust is perfectly crispy and the toppings are always fresh. Delivery is super fast too!",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: reviewer1,
    rating: 5,
    review: "Their Margherita pizza is to die for! Authentic Italian taste right at your doorstep. Will order again!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Davis",
    image: reviewer1,
    rating: 5,
    review: "Great variety of toppings and the customer service is excellent. My go-to place for pizza night!",
    date: "2 weeks ago"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-4 text-gray-600 leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {reviews.map((review) => (
                <div key={review.id} className="relative w-10 h-10 rounded-full border-2 border-white">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Join <span className="text-red-600 font-semibold">2,000+</span> satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 