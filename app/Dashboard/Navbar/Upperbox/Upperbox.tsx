import React from 'react';
import { CiMenuBurger } from "react-icons/ci";

export default function Upperbox() {
  return (
    <div className="flex flex-col gap-5 flex-[2] bg-[#0d5977] bg-gradient-to-b from-[rgba(0,255,255,0.05)] to-[#0d5977] mb-2 rounded-xl ml-2 mr-2 mt-2">
      
      This is the upper sidebar
      {/* Content for lower sidebar */}

      <img 
        src="/loading.gif" // Use the path to the GIF in the public folder
        alt="Loading..." 
        className="w-24 h-24" // Adjust the width and height as needed
      />
       
    </div>
  );
}
