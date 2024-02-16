import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCTToPcPiSd9oO2sVFQWKXYN1AYg9ZxnO4',
	authDomain: 'flower-shop-59d8b.firebaseapp.com',
	projectId: 'flower-shop-59d8b',
	storageBucket: 'flower-shop-59d8b.appspot.com',
	messagingSenderId: '133016048676',
	appId: '1:133016048676:web:d540c2791f06cf671234b1',
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);