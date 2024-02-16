// import React from 'react';
// import { useAuth } from './modules/auth/context';

// function App() {
// 	const { user, register, login, logout } = useAuth();

// 	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const formData = new FormData(e.currentTarget);
// 		const email = formData.get('email') as string;
// 		const password = formData.get('password') as string;
// 		register(email, password);
// 	};

// 	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const formData = new FormData(e.currentTarget);
// 		const email = formData.get('email') as string;
// 		const password = formData.get('password') as string;
// 		login(email, password);
// 	};

// 	const handleLogout = () => {
// 		logout();
// 	};

// 	return (
// 		<div className="text-center p-4">
// 			<form className="m-2" onSubmit={handleRegister}>
// 				<h3 className="text-lg font-bold"> Register User </h3>
// 				<input
// 					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
// 					placeholder="Email..."
// 					name="email"
// 				/>
// 				<input
// 					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
// 					placeholder="Password..."
// 					name="password"
// 				/>

// 				<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" type="submit">
// 					Create User
// 				</button>
// 			</form>

// 			<form className="m-2" onSubmit={handleLogin}>
// 				<h3 className="text-lg font-bold"> Login </h3>
// 				<input
// 					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
// 					placeholder="Email..."
// 					name="email"
// 				/>
// 				<input
// 					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
// 					placeholder="Password..."
// 					name="password"
// 				/>

// 				<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" type="submit">
// 					Login
// 				</button>
// 			</form>

// 			<h4 className="bg-ff8f52 text-lg font-bold p-2"> User Logged In: </h4>
// 			{user?.email && <p className="text-xl">{user.email}</p>}

// 			<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" onClick={handleLogout}>
// 				Sign Out
// 			</button>
// 		</div>
// 	);
// }

// const AppWithContext = () => {
// 	return (
// 		<AuthProvider>
// 			<App />
// 		</AuthProvider>
// 	);
// };

// export default AppWithContext;
interface AppProps {}

const App = (props: AppProps) => <h1>App Page</h1>;

export default App;
