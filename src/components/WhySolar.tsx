import { DollarSign, Battery, TrendingUp } from 'lucide-react';

export default function WhySolar() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Reduce your electricity bills by up to 90%. Most homeowners see a complete return on investment within 5-7 years, with panels lasting 25+ years.',
    },
    {
      icon: Battery,
      title: 'Energy Independence',
      description: 'Generate your own clean power and protect yourself from rising utility rates. Add battery storage for complete energy security during outages.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Home Value',
      description: 'Homes with solar panels sell for an average of 4.1% more. Solar is a smart investment that pays off immediately and long-term.',
    },
  ];

  return (
    <section id="why-solar" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solar power is the smartest investment you can make for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
