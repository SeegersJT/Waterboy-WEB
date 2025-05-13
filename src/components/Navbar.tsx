
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ShoppingCart, MessageCircle  } from 'lucide-react';
import OrderModal from './OrderModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const openOrderModal = () => setShowOrderModal(true);
  const closeOrderModal = () => setShowOrderModal(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section
      const sections = ['home', 'about', 'services', 'education', 'locations', 'opportunities', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset to account for fixed header
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      if (isMenuOpen) toggleMenu();
    }
  };

  const openWhatsapp = () => {
    window.open('https://wa.me/27789069543', '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }} 
            href="#home" 
            className="flex items-center cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-display font-bold text-waterboy-700 flex items-center">
              <span>Water</span>
              <span className="text-waterboy-500">Boy</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {['home', 'about', 'services', 'education', 'locations', 'opportunities', 'contact'].map((section) => (
              <a
                key={section}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                href={`#${section}`}
                className={`nav-link relative ${
                  activeSection === section ? 'text-waterboy-500 font-medium' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-waterboy-500 transform transition-transform duration-300 ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={openWhatsapp}
              variant="default" 
              size="sm" 
              className="bg-green-500 hover:bg-green-600 flex items-center gap-1"
            >
              <MessageCircle size={16} />
              WhatsApp
            </Button>
            
            <Button 
              onClick={openOrderModal}
              variant="default" 
              size="sm"
              className="bg-waterboy-700 hover:bg-waterboy-800 flex items-center"
            >
              <ShoppingCart className="mr-1" size={16} />
              Order Now
            </Button>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-waterboy-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-16">
            <div className="container-custom flex flex-col space-y-4 py-8">
              {['home', 'about', 'services', 'education', 'locations', 'opportunities', 'contact'].map((section) => (
                <a 
                  key={section}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  href={`#${section}`} 
                  className={`text-xl font-medium px-4 py-2 hover:bg-waterboy-50 rounded-md ${
                    activeSection === section ? 'text-waterboy-500' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={openWhatsapp}
                  variant="default" 
                  size="lg" 
                  className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
                <Button 
                  onClick={() => {
                    openOrderModal();
                    toggleMenu();
                  }}
                  variant="default" 
                  size="lg" 
                  className="w-full bg-waterboy-700 hover:bg-waterboy-800 flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Order Modal */}
      <OrderModal isOpen={showOrderModal} onClose={closeOrderModal} />
    </>
  );
};

export default Navbar;
