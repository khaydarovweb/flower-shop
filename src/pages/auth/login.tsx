import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context';

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
		<form className="m-2" onSubmit={handleLogin}>
			<h3 className="text-lg font-bold"> Login </h3>
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
	);
};

export default Login;
