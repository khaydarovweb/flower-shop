import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context';

interface RegisterProps {}

const Register = (props: RegisterProps) => {
	const { register } = useAuth();
	const navigate = useNavigate();

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const formData = new FormData(e.currentTarget);
			const email = formData.get('email') as string;
			const password = formData.get('password') as string;
			register(email, password);
			navigate('/profile');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className="m-2" onSubmit={handleRegister}>
			<h3 className="text-lg font-bold"> Register User </h3>
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
				Create User
			</button>
		</form>
	);
};

export default Register;
