import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">MedMavens</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-500 hover:text-orange-500">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-500 hover:text-orange-500">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-500 hover:text-orange-500">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-orange-600 font-medium px-4 py-2 rounded-md border-2 border-orange-600 hover:bg-orange-500 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-500">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-500">Services</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-500">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-500">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;