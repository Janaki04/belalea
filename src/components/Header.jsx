import React, { useState } from 'react';
import logo from "../assets/Logo.svg";
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for: ${searchQuery}`);
      setIsMobileMenuOpen(false);
    }
  };

  const getNavLinkClass = ({ isActive }) =>
    `transition-colors duration-200 text-[15px] font-medium ${
      isActive ? 'text-[#7BB074] font-semibold' : 'text-[#274C5B] hover:text-[#7BB074]'
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `transition-colors duration-200 block text-base font-medium ${
      isActive ? 'text-[#7BB074] font-semibold pl-2 border-l-2 border-[#7BB074]' : 'text-[#274C5B] hover:text-[#7BB074]'
    }`;

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4">
          
          <div className="flex-shrink-0 flex items-center gap-2">
            <img 
              onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }} 
              src={logo} 
              alt="Logo" 
              className="h-10 w-auto cursor-pointer" 
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={getNavLinkClass}>oMeH</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>О нас</NavLink>
            <NavLink to="/shop" className={getNavLinkClass}>Каталог</NavLink>
            <NavLink to="/blog" className={getNavLinkClass}>Блог</NavLink>
            <NavLink to="/contacts" className={getNavLinkClass}>Контакты</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md justify-end">
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-[260px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
                className="w-full bg-[#F8F9FA] rounded-full py-2.5 pl-4 pr-12 text-[#274C5B] focus:outline-none focus:ring-1 focus:ring-[#7BB074] transition-all text-sm"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#83B67C] text-white p-2 rounded-full hover:bg-[#6FA068] transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.602 10.602z" />
                </svg>
              </button>
            </form>

            <Link 
              to="/contacts" 
              className="flex items-center gap-3 border border-[#E9ECEF] rounded-full py-1.5 pl-1.5 pr-5 hover:shadow-sm transition-all text-[#274C5B] font-medium text-[15px]"
            >
              <div className="w-9 h-9 bg-[#2A4454] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <span>Контакты</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2E4756] hover:text-[#7BB074] focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-4 shadow-inner">
          <nav className="flex flex-col space-y-3">
            <NavLink to="/about" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>О нас</NavLink>
            <NavLink to="/shop" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Каталог</NavLink>
            <NavLink to="/blog" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Блог</NavLink>
            <NavLink to="/contacts" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Контакты</NavLink>
          </nav>

          <hr className="border-gray-100" />
          
          <div className="space-y-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
                className="w-full bg-[#F8F9FA] rounded-full py-2.5 pl-4 pr-12 text-[#2E4756] focus:outline-none focus:ring-1 focus:ring-[#7BB074] text-sm"
              />
              <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#83B67C] text-white p-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.602 10.602z" />
                </svg>
              </button>
            </form>

            <Link 
              to="/contacts" 
              className="inline-flex items-center gap-3 border border-[#E9ECEF] rounded-full py-1.5 pl-1.5 pr-5 text-[#2E4756] font-medium w-full justify-center hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-9 h-9 bg-[#2A4454] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <span>Контакты</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}