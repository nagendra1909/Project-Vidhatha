import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Heart Icon for Donate Button
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" 
      fill="#E61C1F"
    />
  </svg>
);

// Menu Icon for Mobile
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Close Icon for Mobile
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/resources", label: "Resources" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src="/Logo.png" 
              alt="Project Vidhatha Logo" 
              className="h-16 w-16 object-contain"
            />
            {/* <span className="ml-2 text-xl font-bold text-ngo-primary">Project Vidhatha</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-niramit text-base font-medium transition-all duration-300 hover:text-ngo-primary hover:scale-105 ${
                  isActivePage(item.path)
                    ? "text-ngo-primary font-semibold"
                    : "text-ngo-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Donate Button */}
          <Link 
            to="/donate" 
            className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            <HeartIcon />
            <span className="text-ngo-secondary font-merriweather text-base font-bold">
              Donate now
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-ngo-secondary hover:text-ngo-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100 mt-4" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <nav className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md font-niramit text-base font-medium transition-all duration-300 hover:bg-ngo-gray-50 hover:text-ngo-primary ${
                  isActivePage(item.path)
                    ? "text-ngo-primary font-semibold bg-ngo-gray-50"
                    : "text-ngo-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Donate Button */}
            <Link 
              to="/donate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-ngo-primary text-white rounded-md px-4 py-3 mt-4 font-merriweather text-base font-bold hover:bg-red-600 transition-all duration-300"
            >
              <HeartIcon />
              Donate now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;