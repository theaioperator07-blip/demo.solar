import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    electricBill: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon with your free solar quote.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Solar Quote
          </h2>
          <p className="text-xl text-gray-300">
            Start saving money today with clean, renewable energy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
              Home Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="123 Main St, Austin, TX 78701"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="electricBill" className="block text-sm font-semibold text-slate-700 mb-2">
              Average Monthly Electric Bill *
            </label>
            <select
              id="electricBill"
              name="electricBill"
              required
              value={formData.electricBill}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-md focus:border-orange-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Select your bill range</option>
              <option value="under-100">Under $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-plus">$200+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
          >
            <span>Get My Free Quote</span>
            <Send className="h-5 w-5" />
          </button>

          <p className="text-center text-sm text-slate-500 mt-4">
            No obligation. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
