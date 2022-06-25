import FilterOption from "./FilterOption";

import useMenuProvider from "../../hooks/useMenuProvider";

const Filter = () => {
	const { showMenu } = useMenuProvider();

	return (
		<div className={`w-full xl:max-w-[250px] 2xl:max-w-[300px] min-h-full bg-tracrypt-dk shadow-2xl shadow-black text-tracrypt-wt text-sm 2xl:text-lg text-center font-extralight tracking-widest flex xl:flex flex-col justify-between xl:relative z-20 rounded-t-xl xl:overflow-x-hidden ${showMenu ? "absolute" : "hidden"}`}>

			<div className="flex flex-col items-center gap-5">
				<div className="w-full z-10">
					<div className="py-3 bg-tracrypt-dk-f hover:bg-tracrypt-gr-dk border-b-2 border-b-tracrypt-bl shadow-lg shadow-black text-center cursor-default transition-all">
						<h1>Filters</h1>
					</div>
				</div>

				<div className="w-full max-w-2xl sm:max-w-lg mx-auto sm:mt-5 2xl:mt-0 2xl:px-0 flex flex-col gap-8 2xl:gap-5"> 

					<FilterOption icon="fiat" name="Currency" />

					<FilterOption icon="gainers" name="MVP" />

					<FilterOption icon="marketCap" name="Mkt Cap" />

					<FilterOption icon="volumen" name="Volumen" />
		
				</div>
			</div>

			<div>
				{/* Coingecko Atribbute */}
				<div className="w-full max-w-2xl sm:max-w-lg mx-auto mt-10 sm:mt-0 mb-2 2xl:mb-4 z-0 hover:cursor-default">
					<div className="p-3 flex justify-center items-center">
						<a
							className="container py-2 shadow-md shadow-green-500 hover:shadow-lg hover:shadow-green-500 rounded-lg transition-all"
							href="https://www.coingecko.com/en/api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h1 className="text-sm font-extralight">Powered by</h1>
							<h1 className="text-xl text-green-500">Coingecko API</h1>
						</a>
					</div>
				</div>

				{/* Disclaimer */}
				<div className="w-full bg-tracrypt-dk-f hover:bg-red-900 shadow-lg shadow-black text-red-500 hover:text-tracrypt-wt z-0 transition-all hover:cursor-default">
					<div className="py-3 border-b-2 border-b-red-500 shadow-md shadow-black text-center flex justify-center">
						<div className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="20"
								fill="none"
								viewBox="0 0 22 20"
							>
								<path
									fill="red"
									d="M21.4 18.063L11.65 1.188A.741.741 0 0011 .813a.739.739 0 00-.65.375L.6 18.063a.75.75 0 00.65 1.125h19.5a.75.75 0 00.65-1.125zM10.25 7.75c0-.103.084-.188.188-.188h1.124c.104 0 .188.085.188.188v4.313a.188.188 0 01-.188.187h-1.124a.188.188 0 01-.188-.188V7.75zM11 16a1.125 1.125 0 010-2.25A1.125 1.125 0 0111 16z"
								></path>
							</svg>
							<h1 className="">Disclaimer</h1>
						</div>
					</div>
					<div className="w-full">
						<div className="py-2 bg-tracrypt-gr">
							<p className="px-1 text-[12px] text-tracrypt-wt leading-normal overflow-hidden">
								Any use or reliance on our content is solely at your own risk
								and discretion.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
