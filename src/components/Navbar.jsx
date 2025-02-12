import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img className="h-8" src="/tedx-logo.png" alt="TEDxAKGEC" />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-ted-red px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-ted-red px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/theme" className="text-white hover:text-ted-red px-3 py-2 rounded-md text-sm font-medium">
                Theme
              </Link>
              <Link to="/speakers" className="text-white hover:text-ted-red px-3 py-2 rounded-md text-sm font-medium">
                Speakers
              </Link>
              <Link to="/contact" className="text-white hover:text-ted-red px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;