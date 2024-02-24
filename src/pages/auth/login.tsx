import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context';

import { FaHouse } from 'react-icons/fa6';

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
			<div className="p-14 w-2/4">
				<form className="m-2" onSubmit={handleLogin}>
					<span className="w-full flex justify-between">
						<span>
							<h3 className="font-medium text-[52px]">Login</h3>
							<p className="font-[32px] text-[#838383]">Login and have more fun</p>
						</span>
						<button className="flex items-center gap-2" onClick={() => navigate('/')}>
							{' '}
							<FaHouse color="#FF8F52" />
							Back to home
						</button>
					</span>
					<span className="flex flex-col py-5 gap-5">
						<input
							className="bg-white border border-[#D9D9D9] rounded-md p-2 outline-none font-[22px] text-[#838383]"
							placeholder="Email..."
							name="email"
						/>
						<input
							className="bg-white border border-[#D9D9D9] rounded-md p-2 outline-none font-[22px] text-[#838383]"
							placeholder="Password..."
							name="password"
						/>

						<button className="bg-orange-400 text-white rounded-md px-4 py-2 mt-2" type="submit">
							Login
						</button>
					</span>
					<p className="text-center">
						Do not have an account?{' '}
						<span className="text-[#FF8F52]" onClick={() => navigate('/auth/register')}>
							Register
						</span>
					</p>
				</form>
			</div>
			<div className="w-2/4">
				<img className="h-full w-full object-cover" src={LoginLeft} alt="" />
			</div>
		</section>
	);
};

export default Login;
