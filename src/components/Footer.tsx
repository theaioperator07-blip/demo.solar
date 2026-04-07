import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import client from '../config/client.json';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">{client.company_name}</span>
            </div>
            <p className="text-gray-400 mb-4">{client.tagline}</p>
            <div className="space-y-2">
              <a href={`tel:${client.phone}`} className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                <Phone className="h-5 w-5" />
                <span>{client.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@sunpeaksolar.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Austin, Texas</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-solar')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Why Solar
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Solar</li>
              <li>Solar Panel Installation</li>
              <li>Battery Storage</li>
              <li>System Maintenance</li>
              <li>Energy Audits</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {client.company_name}. All rights reserved. | Licensed & Insured
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
