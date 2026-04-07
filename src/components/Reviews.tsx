import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'John M.',
      location: 'Austin, TX',
      rating: 5,
      text: 'Absolutely thrilled with my solar installation! My electric bill went from $220/month to just $15. The team was professional, the install was quick, and the system has worked flawlessly for 6 months. Best home investment I\'ve ever made.',
    },
    {
      name: 'Sarah T.',
      location: 'Houston, TX',
      rating: 5,
      text: 'I was nervous about going solar, but the consultation put all my worries to rest. They designed the perfect system for my roof, handled all the permits, and finished in 2 days. My energy bills are now practically nothing!',
    },
    {
      name: 'Michael R.',
      location: 'Dallas, TX',
      rating: 5,
      text: 'Outstanding service from start to finish. The ROI calculator they showed me was spot-on - I\'m already saving $2,400 a year. The monitoring app is great too. Highly recommend to anyone considering solar!',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who made the switch to solar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
