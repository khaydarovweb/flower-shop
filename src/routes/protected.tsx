import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../modules/auth/context';

interface UserType {
  // Define the structure of your user object here
}

const Protected = ({ children }: { children: ReactNode }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default Protected;