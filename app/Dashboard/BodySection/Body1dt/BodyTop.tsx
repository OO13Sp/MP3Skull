// Inside BodyTop.tsx
import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

interface BodyTopProps {
  toggleNavbar: () => void;
  isMenuOpen: boolean;
}

export default function BodyTop({ toggleNavbar, isMenuOpen }: BodyTopProps) {
  
  
  
  const [history, setHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    // Update history on location change
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      if (currentIndex < newHistory.length - 1) {
        newHistory.splice(currentIndex + 1);
      }
      newHistory.push(location.pathname);
      setCurrentIndex(newHistory.length - 1);
      return newHistory;
    });
  }, [location]);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      navigate(history[currentIndex - 1]);
    }
  };

  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      navigate(history[currentIndex + 1]);
    }
  };
  
  
  
  
  
  return (
    <div className="flex justify-between items-center p-2 bg-[#103245] shadow-[inset_0_-5px_15px_rgba(0,255,255,0.2)] rounded-[1rem] h-12 md:h-16">
      <div className="flex gap-2 items-center">
        <button
          onClick={toggleNavbar}
          className="text-white hover:bg-[#62BCE4] p-1 rounded-full transition-transform duration-600 ease-in-out"
        >
          {isMenuOpen ? (
            <RxCross1 className="text-lg md:text-2xl" />
          ) : (
            <CiMenuBurger className="text-lg md:text-2xl" />
          )}
        </button>
        <button
          onClick={handleBack}
          disabled={currentIndex <= 0}
          className="text-white hover:bg-[#62BCE4] p-1 rounded-full transition-transform duration-600 ease-in-out hover:scale-125"
        >
          <IoChevronBack className="text-lg md:text-2xl" />
        </button>
        <button
          onClick={handleForward}
          disabled={currentIndex >= history.length - 1}
          className="text-white hover:bg-[#62BCE4] p-1 rounded-full transition-transform duration-600 ease-in-out hover:scale-125"
        >
          <IoChevronForwardOutline className="text-lg md:text-2xl" />
        </button>



      </div>
      <div className="flex gap-2 items-center">
        <Form method="post" action="/logout">
          <button
            type="submit"
            className="text-white hover:bg-red-500 p-1 rounded-full"
          >
            Sign out
          </button>
        </Form>
        {/* Profile and notification buttons */}
        <button className="text-xs bg-[#61dafb] px-2 py-1 rounded-full text-[#282c34] font-bold transition-colors duration-600 hover:bg-[#21a1f1] md:px-3 md:py-2 md:text-base transition-transform duration-600 hover:scale-125">
          <FaBell />
        </button>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden transition-transform duration-300 hover:scale-150">
          <Link to="/profile">
            <img
              src="/pic.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}


