import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DeleteEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleDeleteEmail = async () => {
    setError('');
    try {
      const response = await fetch('/api/delete-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/delete-success');
      } else {
        setError(result.message || 'Failed to delete email');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-4">Delete Your Email</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <span>@cptcr.cc</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <button
          onClick={handleDeleteEmail}
          className="w-full p-2 bg-red-600 rounded hover:bg-red-700"
        >
          Delete Email
        </button>
      </div>
    </div>
  );
}
