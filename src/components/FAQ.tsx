import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does a solar system cost?',
      answer: 'The cost varies based on your home size and energy needs, but most residential systems range from $15,000-$30,000 before incentives. With federal tax credits (30%) and state incentives, the actual cost is significantly lower. Most homeowners see a full return on investment within 5-7 years.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Once permits are approved, the physical installation typically takes 1-3 days. The entire process from consultation to system activation usually takes 4-8 weeks, including design, permitting, and utility approvals.',
    },
    {
      question: 'Will solar panels damage my roof?',
      answer: 'No, when properly installed by certified professionals, solar panels actually protect your roof from weather and UV damage. We inspect your roof before installation and ensure it\'s in good condition. The mounting system is designed to prevent leaks and can be easily removed if needed.',
    },
    {
      question: 'What kind of warranty do solar panels have?',
      answer: 'Solar panels typically come with a 25-year performance warranty guaranteeing at least 80% output, plus a 10-15 year product warranty. Inverters have 10-25 year warranties. We also provide workmanship warranties on our installation.',
    },
    {
      question: 'Can I get financing for solar?',
      answer: 'Yes! We offer multiple financing options including $0 down solar loans, home equity loans, and PACE financing. Many homeowners choose financing because the monthly loan payment is less than their previous electric bill, creating immediate positive cash flow.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about going solar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-orange-500 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 bg-gray-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
