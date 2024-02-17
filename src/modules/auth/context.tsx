import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../../utils';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

interface AuthContextType {
	user: {
		username: string;
		email: string;
		password: string;
	};
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
	// <-- Ensure it's named AuthContextProvider here
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const register = async (email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const authContextValue: AuthContextType = {
		user,
		register,
		login,
		logout,
	};

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
