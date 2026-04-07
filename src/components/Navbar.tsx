import { Phone, Sun } from 'lucide-react';
import client from '../config/client.json';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-slate-900">{client.company_name}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-slate-700 hover:text-orange-500 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('why-solar')} className="text-slate-700 hover:text-orange-500 transition-colors">Why Solar</button>
            <button onClick={() => scrollToSection('reviews')} className="text-slate-700 hover:text-orange-500 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-500 transition-colors">Contact</button>
          </div>

          <div className="flex items-center space-x-4">
            <a href={`tel:${client.phone}`} className="hidden sm:flex items-center space-x-2 text-slate-900 hover:text-orange-500 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{client.phone}</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
