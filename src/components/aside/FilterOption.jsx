const FilterOptions = ({ icon, name }) => {
	const icons = {
		fiat: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="24"
				fill="none"
				viewBox="0 0 26 24"
			>
				<path
					fill="#F6F6F6"
					d="M12.857 0l12.857 5.143v1.714H24a.795.795 0 01-.275.603.924.924 0 01-.65.254H2.639a.924.924 0 01-.65-.254.795.795 0 01-.274-.603H0V5.143L12.857 0zM3.43 8.571h3.428v10.286h1.714V8.571H12v10.286h1.714V8.571h3.429v10.286h1.714V8.571h3.429v10.286h.79c.25 0 .466.085.65.255.183.17.274.37.274.602v.857H1.714v-.857c0-.232.092-.433.275-.602.183-.17.4-.255.65-.255h.79V8.571zM24.79 21.43c.25 0 .467.084.65.254.183.17.274.37.274.603V24H0v-1.714c0-.232.092-.433.275-.603.183-.17.4-.254.65-.254H24.79z"
				></path>
			</svg>
		),
		marketCap: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<mask
					id="mask0_23_90"
					style={{ maskType: "alpha" }}
					width="22"
					height="22"
					x="1"
					y="1"
					maskUnits="userSpaceOnUse"
				>
					<path
						stroke="#fff"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8.172 2.759a10.015 10.015 0 00-3.243 2.17A9.969 9.969 0 002 12c0 5.523 4.477 10 10 10a9.968 9.968 0 007.071-2.929 10.012 10.012 0 002.17-3.244"
					></path>
					<path
						fill="#fff"
						stroke="#fff"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 12h10c0-5.523-4.477-10-10-10v10z"
					></path>
				</mask>
				<g mask="url(#mask0_23_90)">
					<path fill="#F6F6F6" d="M0 0h24v24H0V0z"></path>
				</g>
			</svg>
		),
		volumen: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				fill="none"
				viewBox="0 0 22 22"
			>
				<path
					stroke="#F6F6F6"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M11 7h2.5V1L21 8.5 13.5 16v-5H8V5.5L1 13l7 8v-6h2.5"
				></path>
			</svg>
		),
		gainers: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="21"
				fill="none"
				viewBox="0 0 13 21"
			>
				<path
					fill="#F6F6F6"
					d="M6 1a1 1 0 001 1h2.59l-6.3 6.29a1 1 0 000 1.42L6.59 13l-5.3 5.29a1.004 1.004 0 001.42 1.42l6-6a1 1 0 000-1.42L5.41 9 11 3.41V6a1 1 0 002 0V1a1.001 1.001 0 00-.08-.38 1 1 0 00-.54-.54A1 1 0 0012 0H7a1 1 0 00-1 1z"
				></path>
			</svg>
		),
		losers: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="21"
				fill="none"
				viewBox="0 0 13 21"
			>
				<path
					fill="#F6F6F6"
					d="M7 20a1 1 0 00-1-1H3.41l6.3-6.29a.999.999 0 000-1.42L6.41 8l5.3-5.29a1.004 1.004 0 10-1.42-1.42l-6 6a1 1 0 000 1.42L7.59 12 2 17.59V15a1 1 0 00-2 0v5a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h5a1 1 0 001-1z"
				></path>
			</svg>
		),
	};

	return (
		<>
			<div className="w-full z-0 hover:cursor-default">
				<div className="flex justify-center items-center gap-5 py-3 bg-tracrypt-dk shadow-md shadow-black hover:bg-tracrypt-bl-dk transition-all">
					<div className="flex items-center gap-4">
						{icons[icon]}
						<h1>{name}</h1>
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="py-3 bg-tracrypt-gr-dk shadow-lg shadow-black">
					<h1>Selector</h1>
				</div>
			</div>
		</>
	);
};

export default FilterOptions;
