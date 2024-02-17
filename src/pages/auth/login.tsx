import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context';

import LoginLeft from '../../assets/imgs/login.png';

interface LoginProps {}

const Login = (props: LoginProps) => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const formData = new FormData(e.currentTarget);
			const email = formData.get('email') as string;
			const password = formData.get('password') as string;
			login(email, password);
			navigate('/profile');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="h-screen flex">
			<div className="p-10 w-2/4">
				<form className="m-2" onSubmit={handleLogin}>
					<span className="w-full flex justify-between">
						<h3 className="font-medium text-[32px]">Login</h3>
						<button onClick={() => navigate('/')}>Back to home</button>
					</span>
					<input
						className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
						placeholder="Email..."
						name="email"
					/>
					<input
						className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
						placeholder="Password..."
						name="password"
					/>

					<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" type="submit">
						Login
					</button>
				</form>
			</div>
			<div className="w-2/4">
				<img className="h-full w-full object-cover" src={LoginLeft} alt="" />
			</div>
		</section>
	);
};

export default Login;
