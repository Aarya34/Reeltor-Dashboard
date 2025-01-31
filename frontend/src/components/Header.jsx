import React from 'react';
import { Bell } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    // Header component is rendered here
  return (
    
    <header className="bg-white shadow-sm fixed top-0 left-20 w-full z-10">
      <div className="flex justify-between items-center p-6">
        <h1
          className="text-sm text-gray-600 font-normal"
          style={{
            fontFamily: 'Raleway',
            fontSize: '17px',
            fontWeight: '700',
            lineHeight: '17.26px',
            textAlign: 'justify',
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font',
          }}
        >
          Dashboard
        </h1>

        <div className="flex items-center space-x-4 ml-auto">
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center relative right-45">
            <Bell size={24} className="text-black" />
          </button>
          <span className="text-sm text-gray-600 font-normal hidden sm:inline-block relative right-45">
            Aarya Chepuri
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
