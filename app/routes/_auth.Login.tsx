import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { getSignInUrl } from '@workos-inc/authkit-remix';

export const loader = async () => {
  try {
    const signInUrl = await getSignInUrl();
    return { signInUrl };
  } catch (error) {
    console.error('Error fetching sign-in URL:', error);
    return { signInUrl: null }; // Return null if there's an error
  }
};

export default function LoginRouter() {
  const loaderData = useLoaderData();
  console.log(loaderData); // Log what is returned from the loader
  const { signInUrl } = loaderData || {}; // Default to an empty object to prevent destructuring error
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log('SignIn URL:', signInUrl); // Log the signInUrl

    if (signInUrl) {
      window.location.href = signInUrl;
    } else {
      setError('Unable to retrieve sign-in URL. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Login to Your Account</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleLogin}>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white text-base font-bold rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
