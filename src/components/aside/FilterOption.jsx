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
				width="30"
				height="24"
				fill="none"
				viewBox="0 0 30 24"
			>
				<g clipPath="url(#clip0_91_80)">
					<path
						fill="#F6F6F6"
						d="M19.036 2.89a.547.547 0 01.305.926l-1.782 1.72.422 2.438c.024.44-.389.778-.792.576l-2.18-1.148-2.198 1.162a.55.55 0 01-.792-.572l.422-2.442-1.782-1.734a.547.547 0 01.305-.926l2.452-.353 1.106-2.24a.533.533 0 01.956 0l1.106 2.24 2.452.353zM18 12c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h6zM7.5 15c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 010 22.5v-6c0-.83.672-1.5 1.5-1.5h6zM21 19.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5v-3z"
					></path>
				</g>
				<defs>
					<clipPath id="clip0_91_80">
						<path fill="#fff" d="M0 0H30V24H0z"></path>
					</clipPath>
				</defs>
			</svg>
		),
	};

	return (
		<>
			<div className="shadow-lg shadow-black bg-tracrypt-dk hover:bg-tracrypt-bl-dk transition-all">
				<div className="w-full z-10 hover:cursor-default ">
					<div className="flex justify-center items-center gap-5 py-3">
						<div className="flex items-center gap-2">
							{icons[icon]}
							<h1>{name}</h1>
						</div>
					</div>
				</div>

				{icon === "fiat" ? (
					<div className="w-full z-0">
						<div className="flex justify-evenly items-center  bg-tracrypt-gr-dk">
							<button className="hover:bg-tracrypt-dk w-1/2 py-2">USD</button>
							<button className="hover:bg-tracrypt-dk w-1/2 py-2">EUR</button>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default FilterOptions;
