import FilterOption from "./FilterOption";
import useMenuProvider from "../../hooks/useMenuProvider";

const Filter = () => {
	const { showMenu } = useMenuProvider();

	return (
		<div className={`2xl:w-2/12 text-tracrypt-wt font-extralight tracking-widest text-lg bg-tracrypt-dk rounded-tr-xl shadow-2xl shadow-black text-center flex flex-col justify-between min-h-full 2xl:overflow-x-hidden 2xl:relative 2xl:flex w-full ${showMenu ? "absolute" : "hidden"}`}>
			<div className="flex flex-col items-center gap-5">
				<div className="w-full z-10">
					<div className="bg-tracrypt-dk-f py-3 text-center border-b-2 border-b-tracrypt-bl shadow-lg shadow-black cursor-default hover:bg-tracrypt-gr-dk transition-all">
						<h1>Filters</h1>
					</div>
				</div>

				<div className="w-full mx-auto flex flex-col 2xl:gap-5 2xl:mt-0 sm:mt-5 gap-8 2xl:px-0 max-w-2xl sm:max-w-lg"> 

					<FilterOption icon="fiat" name="Currency" />

					<FilterOption icon="gainers" name="MVP" />

					<FilterOption icon="marketCap" name="Mkt Cap" />

					<FilterOption icon="volumen" name="Volumen" />
		
				</div>
			</div>

			<div>
				{/* Coingecko Atribbute */}
				<div className="w-full mx-auto z-0 hover:cursor-default 2xl:mb-4 mb-2 mt-10 sm:mt-0 max-w-2xl sm:max-w-lg">
					<div className="p-3 flex justify-center items-center">
						<a
							className="container py-2 rounded-lg shadow-md shadow-green-500 hover:shadow-lg hover:shadow-green-500 transition-all"
							href="https://www.coingecko.com/en/api"
							target="_blank"
							rel="noopener nofollow"
						>
							<h1 className="text-sm font-extralight">Powered by</h1>
							<h1 className="text-xl text-green-500">Coingecko API</h1>
						</a>
					</div>
				</div>

				{/* Disclaimer */}
				<div className="w-full z-0 shadow-lg shadow-black bg-tracrypt-dk-f text-red-500 hover:cursor-default hover:bg-red-900 hover:text-tracrypt-wt transition-all">
					<div className="flex justify-center py-3 text-center border-b-2 border-b-red-500 shadow-md shadow-black ">
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
							<p className="text-[12px] px-1 leading-normal overflow-hidden text-tracrypt-wt">
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
