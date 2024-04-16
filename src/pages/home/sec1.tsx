import { useNavigate } from 'react-router-dom';

interface Sec1Props {}

const Sec1 = (props: Sec1Props) => {
	const navigate = useNavigate();
	return (
		<section className="h-screen bg-[#F2F2F2] pt-[100px] mt-[-100px] flex">
			<div className="h-full w-2/4  p-20">
				<h1 className="text-[60px] text-[#121212] pb-9">
					Flowers, 🌻 <br /> what the world <br /> needs{' '}
				</h1>
				<p className="text-[#838383] text-[20px] pb-11">Browse between hounders of flowers</p>
				<button className="btn-primary" onClick={() => navigate('/')}>
					{' '}
					Browse
				</button>
			</div>
			<div className="h-full w-2/4 bg-blue-400 grid grid-cols-3 gap-30 p-10 place-items-center">
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/flower1.png" alt="" />
				</div>
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/flower1.png" alt="" />
				</div>
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/flower2.png" alt="" />
				</div>
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/flower3.png" alt="" />
				</div>
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/flower4.png" alt="" />
				</div>
				<div className="h-[192px] w-[192px] border rounded-xl">
					<img className="h-full w-full" src="../../assets/imgs/red-rose.png" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Sec1;
