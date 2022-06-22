import FilterOption from "./FilterOption";

const Filter = () => {
	return (
		<div className="w-2/12 text-tracrypt-wt font-extralight tracking-widest text-xl bg-tracrypt-dk rounded-tr-xl shadow-2xl shadow-black text-center flex flex-col justify-between max-h-full overflow-x-hidden">
			<div className="w-full z-10">
				<div className="bg-tracrypt-dk-f py-3 text-center border-b-2 border-b-tracrypt-bl shadow-lg shadow-black cursor-default hover:bg-tracrypt-gr-dk transition-all">
					<h1>Filters</h1>
				</div>
			</div>

			<FilterOption icon="fiat" name="Currencies" />

			<FilterOption icon="marketCap" name="Mkt Cap" />

			<FilterOption icon="volumen" name="Volumen" />

			<FilterOption icon="gainers" name="Gainers" />

			{/* Disclaimer */}
			<div className="w-full z-0 shadow-lg shadow-black hover:cursor-default">
				<div className="flex justify-center bg-tracrypt-dk-f py-3 text-center border-b-2 border-b-red-500 shadow-md shadow-black hover:bg-red-900 transition-all">
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
						<h1 className="text-red-500">Disclaimer</h1>
					</div>
				</div>
				<div className="w-full">
					<div className="py-2 bg-tracrypt-gr-dk">
						<p className="text-[10px] px-1 leading-normal font-bold overflow-hidden">
							No part of the content that we provide constitutes financial
							advice, legal advice or any other form of advice meant for your
							specific reliance for any purpose. Any use or reliance on our
							content is solely at your own risk and discretion.
						</p>
					</div>
				</div>
			</div>

			{/* Coingecko Atribbute */}
			<div className="w-full z-0 hover:cursor-default mb-4">
				<div className="p-3 flex flex-col justify-center items-center">
					<a
						className="container py-1 rounded-lg shadow-md shadow-green-500 hover:shadow-lg hover:shadow-green-500 transition-all"
						href="https://www.coingecko.com/en/api"
						target="_blank"
						rel="noopener nofollow"
					>
						<h1 className="text-sm font-extralight">Powered by</h1>
						<h1 className="text-xl text-green-500">Coingecko API</h1>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Filter;
