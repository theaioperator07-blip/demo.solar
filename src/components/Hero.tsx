import { Star, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Cut Your Energy Bill by 90%
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Join thousands of homeowners who are saving money and protecting the environment with clean solar energy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors font-semibold text-lg"
          >
            Get Free Quote
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            See How It Works
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-white font-semibold">4.9/5 Rating</p>
            <p className="text-gray-300 text-sm">500+ Reviews</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Users className="h-10 w-10 text-orange-500" />
            <p className="text-white font-semibold">500+ Installs</p>
            <p className="text-gray-300 text-sm">Happy Homeowners</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Award className="h-10 w-10 text-orange-500" />
            <p className="text-white font-semibold">8 Years</p>
            <p className="text-gray-300 text-sm">Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
