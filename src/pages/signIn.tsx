import React, { useEffect } from 'react';
import { UserAuth } from '../modules/auth/context';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <button onClick={handleGoogleSignIn} children="hello" />
      </div>
    </div>
  );
};

export default SignIn;