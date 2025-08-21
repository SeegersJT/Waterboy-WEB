
import { Facebook, Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-waterboy-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">WaterBoy</h3>
            <p className="text-waterboy-100 mb-6">
              Delivering clean purified water to your doorstep since 2010. We make hydration convenient and hassle-free.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-waterboy-700 rounded-full hover:bg-waterboy-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/27789069543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-waterboy-700 rounded-full hover:bg-waterboy-600 transition-colors"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.41044 22L3.76749 16.4147C2.93524 15.0884 2.50021 13.5337 2.5 11.9167C2.49974 6.91919 6.57299 2.83333 11.5833 2.83333C14.0167 2.83333 16.3201 3.76668 18.0636 5.51465C19.8071 7.26263 20.75 9.56668 20.75 12C20.75 16.9975 16.6767 21.0833 11.6667 21.0833C10.1487 21.0833 8.62624 20.7078 7.28695 20H2.41044Z" />
                  <path d="M2.41044 22L3.76749 16.4147C2.93524 15.0884 2.50021 13.5337 2.5 11.9167C2.49974 6.91919 6.57299 2.83333 11.5833 2.83333C14.0167 2.83333 16.3201 3.76668 18.0636 5.51465C19.8071 7.26263 20.75 9.56668 20.75 12C20.75 16.9975 16.6767 21.0833 11.6667 21.0833C10.1487 21.0833 8.62624 20.7078 7.28695 20H2.41044Z" />
                  <path d="M16.0434 14.5C15.7014 15.0167 14.9116 15.6434 14.4513 15.7581C14.1788 15.8186 13.7818 15.8658 12.9833 15.5917C11.7034 15.1588 10.2264 13.8461 9.17682 12.0333C8.67809 11.1686 8.42426 10.0814 9.17682 9.33333C9.37501 9.10625 9.58266 8.98866 9.79167 8.91667L10.3784 8.91667C10.5867 8.91667 10.8034 9.11667 10.9167 9.33333L11.4334 10.375C11.525 10.5667 11.5076 10.8131 11.3933 11.0084L11.1316 11.4174C11.0536 11.5449 11.0512 11.7055 11.1267 11.8333C11.3801 12.2683 11.7161 12.7476 12.1083 13.1417C12.4517 13.485 12.8226 13.8281 13.2583 14.055C13.3864 14.1203 13.5386 14.1142 13.6604 14.0401L14.0583 13.7667C14.2517 13.6334 14.5 13.6167 14.6767 13.7L15.9159 14.3507C16.1326 14.4641 16.2167 14.6357 16.0434 14.5Z" />
                </svg>
              </a>
              <a 
                href="mailto:info@waterboy.co.za"
                className="p-2 bg-waterboy-700 rounded-full hover:bg-waterboy-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-waterboy-100 hover:text-white transition-colors">Container Rental & Delivery</a></li>
              <li><a href="#services" className="text-waterboy-100 hover:text-white transition-colors">Water Cooler Rental</a></li>
              <li><a href="#services" className="text-waterboy-100 hover:text-white transition-colors">Refills & Coupons</a></li>
              <li><a href="#services" className="text-waterboy-100 hover:text-white transition-colors">Water Bottles</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#waterboy" className="text-waterboy-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how it works" className="text-waterboy-100 hover:text-white transition-colors">Why WaterBoy</a></li>
              <li><a href="#locations" className="text-waterboy-100 hover:text-white transition-colors">Our Locations</a></li>
              <li><a href="#opportunities" className="text-waterboy-100 hover:text-white transition-colors">Business Opportunities</a></li>
              <li><a href="#contact" className="text-waterboy-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-waterboy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-waterboy-100 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WaterBoy. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="http://h2go.org.za/" className="text-waterboy-100 hover:text-white text-sm transition-colors">Powered by H2GO</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
