// app/routes/dashboard.tsx

import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, redirect } from '@remix-run/react';
import Navbar from '~/Dashboard/Navbar/Navbar';
import cn from 'classnames';
import BodySection from '~/Dashboard/BodySection/BodySection';
import BodyTop from '~/Dashboard/BodySection/Body1dt/BodyTop';

// Loader function to check if the user is logged in
export const loader = async () => {
  return null; // session checking logic should go here in production
};

const Dashboard: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();
 

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    setIsMenuOpen(!isMenuOpen); // Update the menu state for the button icon
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('username'); // Or you can use localStorage.clear() to remove everything
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="relative flex h-screen w-full bg-[#1e1e1e]">
      {/* Sidebar / Navbar */}
      <div
        className={cn([
          'flex flex-col h-screen',
          'bg-[#1e1e1e] p-2.5 rounded-lg',
          'transition-all duration-500',
          {
            'w-[250px]': isNavbarVisible,
            'w-0 overflow-hidden': !isNavbarVisible,
          },
        ])}
      >
        <Navbar />
        
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col bg-[#1b408f] mt-4 mb-2 ml-2 mr-2 rounded-xl overflow-hidden transition-all duration-300 ${
          isNavbarVisible ? 'backdrop-blur-lg opacity-50' : ''
        }`}
      >
        
        <div className="flex flex-col h-full bg-gradient-to-b from-[rgba(0,255,255,0.5)] to-[rgba(0,255,255,0)] p-2.5 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          <BodyTop toggleNavbar={toggleNavbar} isMenuOpen={isMenuOpen} />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>

          {/* Add the Logout Button here */}
          
        </div>
      </div>a
    </div>
  );
};

export default Dashboard;
