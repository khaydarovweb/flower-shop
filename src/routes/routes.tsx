import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Protected from './protected';
import { AuthContextProvider } from '../modules/auth/context';
import Account from '../pages/profile';
import Home from '../pages/home';
import Login from '../pages/signIn';

function App() {
	return (
		<div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
	);
}

export default App;
