import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { getSignUpUrl } from '@workos-inc/authkit-remix';

export const loader = async () => {
  const signUpUrl = await getSignUpUrl();
  return { signUpUrl };
};

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signUpUrl } = useLoaderData();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Registration logic (e.g., send data to your backend)
    // Then redirect to WorkOS sign-up for authentication:
    window.location.href = signUpUrl;
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Create an Account</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold text-gray-800 mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-3 text-base border border-gray-300 rounded focus:border-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold text-gray-800 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 text-base border border-gray-300 rounded focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-800 mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-3 text-base border border-gray-300 rounded focus:border-blue-500"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white text-base font-bold rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
}
