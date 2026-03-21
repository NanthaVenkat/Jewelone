"use client";
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="tw:flex tw:flex-col tw:sm:flex-row tw:gap-2 tw:sm:gap-0">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage('');
          }}
          className="
            tw:flex-grow 
            tw:border tw:border-[#D4D4D4] 
            tw:bg-white 
            tw:p-2 
            tw:text-gray-700 
            tw:placeholder-gray-400 
            focus:tw:border-transparent 
            focus:tw:outline-none 
            focus:tw:ring-0
          "
          type="email"
          placeholder="Email Address*"
          required
        />
        <button
          type="submit"
          className="tw:inline-flex tw:justify-center tw:text-center tw:items-center tw:rounded-md tw:bg-black tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:text-white !tw:uppercase"
        >
          Subscribe
        </button>
      </div>

      {message && (
        <p className="tw:text-green-600 tw:text-sm tw:mt-2">
          {message}
        </p>
      )}
    </form>
    </div>
  );
}
