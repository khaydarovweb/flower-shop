import { useContext, createContext, useEffect, useState, ReactNode } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';

type User = import('firebase/auth').User | null;

interface AuthContextType {
  googleSignIn: () => void;
  logOut: () => void;
  user: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: AuthContextType = {
    googleSignIn,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext)!;
};