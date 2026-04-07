import { Phone, Ruler, Wrench, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Free Consultation',
      description: 'Schedule a no-obligation call with our solar experts to discuss your energy needs and goals.',
    },
    {
      number: '02',
      icon: Ruler,
      title: 'Custom Design',
      description: 'We create a personalized solar system design tailored to your home and energy consumption.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Professional Install',
      description: 'Our certified technicians install your solar panels quickly and professionally with minimal disruption.',
    },
    {
      number: '04',
      icon: Zap,
      title: 'Start Saving',
      description: 'Watch your energy bills drop as you start generating clean, renewable power from day one.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our streamlined process makes going solar simple and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <step.icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
