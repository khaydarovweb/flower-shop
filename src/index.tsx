import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.css';
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { default as App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <BrowserRouter>
	//   <Routes />
	// </BrowserRouter>
	<App />
);
