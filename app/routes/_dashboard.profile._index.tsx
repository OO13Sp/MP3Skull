import React, { useEffect, useState } from 'react';

export default function _dashboard_profilelayoutprofile() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-white mb-6">My Profile</h1>

      {/* Profile Card */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <img
          src="/pic.jpg"
          alt="Profile"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-white">{username}</h3>
          <p className="text-gray-200 text-sm sm:text-base">Team Manager</p>
          <p className="text-gray-200 text-sm sm:text-base">Leeds, United Kingdom</p>
        </div>
        <button className="text-blue-100 text-sm sm:text-base hover:underline">Edit</button>
      </div>

      {/* Personal Information */}
      <div className="border-t border-white pt-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg sm:text-xl text-white">Personal Information</h4>
          <button className="text-blue-100 text-sm sm:text-base hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <p className="text-gray-200 text-sm sm:text-base">First Name</p>
            <p className="font-medium text-white text-base sm:text-lg">Rafiqur</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Last Name</p>
            <p className="font-medium text-white text-base sm:text-lg">Rahman</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Email Address</p>
            <p className="font-medium text-white text-base sm:text-lg">rahman@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Phone</p>
            <p className="font-medium text-white text-base sm:text-lg">+09 345 346 46</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-gray-200 text-sm sm:text-base">Bio</p>
            <p className="font-medium text-white text-base sm:text-lg">Team Manager</p>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="border-t border-white pt-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg sm:text-xl text-white">Address</h4>
          <button className="text-blue-100 text-sm sm:text-base hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Country</p>
            <p className="font-medium text-white text-base sm:text-lg">United Kingdom</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">City/State</p>
            <p className="font-medium text-white text-base sm:text-lg">Leeds, East London</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Postal Code</p>
            <p className="font-medium text-white text-base sm:text-lg">ERT 2354</p>
          </div>
          <div>
            <p className="text-gray-200 text-sm sm:text-base">Tax ID</p>
            <p className="font-medium text-white text-base sm:text-lg">AS45645756</p>
          </div>
        </div>
      </div>
    </div>
  );
}
