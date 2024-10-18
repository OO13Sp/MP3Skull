import React from 'react';
import { Outlet, Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getSignInUrl, getSignUpUrl, authkitLoader } from '@workos-inc/authkit-remix';
import backgroundVideo from '../Assets/background.mp4';
import logoImage from '../Assets/Logo.svg';
import { sessionStorage } from '../sessions'; // Adjust the import path based on your file structure

// Loader to fetch sign-in and sign-up URLs
export const loader = (args) =>
  authkitLoader(args, async () => {
    return json({
      signInUrl: await getSignInUrl(),
      signUpUrl: await getSignUpUrl(),
    });
  });

// Action to handle sign-in
 

// Logout action
 

function _index() {
  // Retrieves signInUrl and signUpUrl from the loader
  const { signInUrl, signUpUrl } = useLoaderData();

  return (
    <div className="relative h-screen w-screen overflow-hidden font-poppins">
      {/* Background video */}
      <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Signup form content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div className="bg-[rgba(141,229,245,0.8)] p-8 max-w-md rounded-lg shadow-lg mt-8">
          <div className="flex justify-center mb-4">
            <img src={logoImage} alt="Logo" className="w-[250px] h-auto" />
          </div>

          {/* WorkOS Sign In and Sign Up buttons */}
          <div className="flex flex-col items-center space-y-4 mb-4">
            <Link
              to={signInUrl}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </Link>
            <Link
              to={signUpUrl}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </Link>
          </div>

          {/* Outlet for dynamic forms */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default _index;
