import { useState } from 'react';

export const useAuthState = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pending, setPending] = useState(false);

  const resetState = () => {
    setError('');
    setSuccess('');
    setPending(false);
  };

  return { error, setError, success, setSuccess, pending, setPending, resetState };
};
