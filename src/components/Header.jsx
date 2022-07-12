import useMenuProvider from "../hooks/useMenuProvider";

const Header = () => {
	const { showMenu, setShowMenu } = useMenuProvider();

	return (
		<>
			<header className="shadow-2xl">
				<div className="flex items-center justify-center py-2 shadow-xl">
					{" "}
					<a
						className="rounded-full transition-all hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-tracrypt-wt"
						href="https://github.com/sebastianlacoste/tracrypt"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
								fill="#F6F6F6"
							/>
						</svg>
					</a>
				</div>
				<div className="flex items-center justify-between py-5 px-4 shadow-2xl xl:justify-center 2xl:px-10">
					{" "}
					<a
						className="hover:cursor-pointer"
						href="/"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width="251"
							height="42"
							fill="none"
							viewBox="0 0 251 42"
						>
							<path
								fill="#F6F6F6"
								d="M28.267 3.688a2.102 2.102 0 00-1.558-.644H2.199c-.641 0-1.191.23-1.603.644C.183 4.1 0 4.608 0 5.25c0 .643.183 1.195.596 1.609.412.413.962.597 1.603.597h9.896v29.1c0 .689.229 1.24.687 1.7.458.46 1.008.69 1.695.69.641 0 1.237-.23 1.695-.69.458-.46.687-1.011.687-1.7v-29.1h9.85c.641 0 1.145-.184 1.558-.597.412-.414.641-.966.641-1.61 0-.643-.229-1.149-.641-1.562zM55.533 39.039c.458 0 .87-.138 1.282-.414.504-.368.825-.873.962-1.517.092-.597 0-1.195-.366-1.7l-7.56-10.942c1.604-.69 2.933-1.7 4.078-3.034 1.787-2.068 2.657-4.505 2.657-7.217 0-3.08-1.1-5.7-3.252-7.907-2.2-2.16-4.81-3.264-7.88-3.264H36.52c-.641 0-1.145.23-1.603.69-.458.46-.688.965-.688 1.609v31.351c0 .644.23 1.196.688 1.61.458.459.962.689 1.603.689s1.191-.23 1.604-.69c.458-.413.687-.965.687-1.609V7.641h6.643c1.786 0 3.344.644 4.627 1.93 1.283 1.288 1.924 2.805 1.924 4.644 0 1.609-.55 3.034-1.558 4.23a6.344 6.344 0 01-3.802 2.206l-.825.092c-.87.092-1.512.551-1.832 1.333-.413.781-.321 1.563.183 2.252l9.483 13.7c.413.643 1.054 1.01 1.879 1.01zM89.884 35.591L76.964 4.653c-.412-1.057-1.145-1.609-2.244-1.609-1.054 0-1.787.552-2.245 1.61L59.6 35.498c-.183.414-.229.782-.229 1.057 0 .69.184 1.242.642 1.701.458.46 1.008.69 1.695.69.458 0 .87-.092 1.283-.368.366-.276.687-.598.916-1.103L74.81 10.72l10.72 26.755c.138.46.459.827.871 1.103s.825.368 1.329.368c.641 0 1.237-.23 1.695-.69a2.26 2.26 0 00.687-1.655c0-.275-.092-.597-.23-1.01zM158.707 39.039c.458 0 .871-.138 1.283-.414.504-.368.825-.873.962-1.517.092-.597 0-1.195-.366-1.7l-7.559-10.942c1.603-.69 2.932-1.7 4.077-3.034 1.787-2.068 2.657-4.505 2.657-7.217 0-3.08-1.099-5.7-3.253-7.907-2.199-2.16-4.81-3.264-7.879-3.264h-8.934c-.641 0-1.145.23-1.603.69-.459.46-.688.965-.688 1.609v31.351c0 .644.229 1.196.688 1.61.458.459.962.689 1.603.689s1.191-.23 1.603-.69c.459-.413.688-.965.688-1.609V7.641h6.643c1.786 0 3.344.644 4.627 1.93 1.282 1.288 1.924 2.805 1.924 4.644 0 1.609-.55 3.034-1.558 4.23a6.345 6.345 0 01-3.802 2.206l-.825.092c-.87.092-1.512.551-1.833 1.333-.412.781-.32 1.563.184 2.252l9.483 13.7c.412.643 1.054 1.01 1.878 1.01zM191.592 3.688a1.874 1.874 0 00-1.42-.644c-.916 0-1.649.414-2.107 1.15l-10.904 17.238-10.72-17.055a5.123 5.123 0 00-.916-1.011 2.413 2.413 0 00-1.191-.322c-.642 0-1.237.23-1.695.644-.459.46-.688.965-.688 1.609 0 .46.138.965.504 1.47l12.232 19.078v10.711c0 .69.23 1.242.688 1.701.458.46 1.008.69 1.649.69s1.237-.23 1.695-.69c.458-.46.687-1.011.687-1.7V25.844L191.73 6.768c.275-.46.458-.966.458-1.517 0-.598-.229-1.104-.596-1.563zM201.072 38.257c.458-.46.687-1.011.687-1.7V26.488h6.781c2.245 0 4.26-.46 6.047-1.471 1.787-.965 3.161-2.345 4.169-4.091 1.008-1.747 1.512-3.724 1.512-5.976 0-2.299-.504-4.322-1.512-6.16-1.008-1.793-2.382-3.218-4.169-4.23-1.787-1.011-3.802-1.517-6.047-1.517h-9.163c-.687 0-1.237.23-1.695.69-.458.46-.687 1.011-.687 1.7v31.122c0 .69.229 1.242.687 1.701.458.46 1.008.69 1.695.69s1.237-.23 1.695-.69zM213.671 20.1c-1.375 1.333-3.07 1.977-5.131 1.977h-6.781V7.457h6.781c2.061 0 3.756.736 5.131 2.115 1.328 1.425 2.016 3.218 2.016 5.379 0 2.114-.688 3.815-2.016 5.148zM250.359 3.688a2.105 2.105 0 00-1.558-.644h-24.51c-.641 0-1.191.23-1.603.644-.413.413-.596.92-.596 1.563 0 .643.183 1.195.596 1.609.412.413.962.597 1.603.597h9.896v29.1c0 .689.229 1.24.687 1.7.458.46 1.008.69 1.695.69.641 0 1.237-.23 1.695-.69.458-.46.687-1.011.687-1.7v-29.1h9.85c.641 0 1.145-.184 1.558-.597.412-.414.641-.966.641-1.61 0-.643-.229-1.149-.641-1.562z"
							></path>
							<path
								fill="url(#pattern0)"
								d="M90.039 0H131.895V42H90.039z"
							></path>
							<defs>
								<pattern
									id="pattern0"
									width="1"
									height="1"
									patternContentUnits="objectBoundingBox"
								>
									<use transform="scale(.005)" xlinkHref="#image0_28_180"></use>
								</pattern>
								<image
									id="image0_28_180"
									width="200"
									height="200"
									xlinkHref="data:image/png;base64,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"
								></image>
							</defs>
						</svg>
					</a>
					{showMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className="mt-2 transition-all ease-in hover:cursor-pointer xl:hidden"
							onClick={() => {
								setShowMenu(!showMenu);
							}}
						>
							<path
								fill="#F6F6F6"
								d="M.44.44a1.5 1.5 0 012.12 0l5.304 5.303L13.168.44A1.5 1.5 0 0115.29 2.56L9.985 7.864l5.304 5.304a1.5 1.5 0 01-2.12 2.121L7.863 9.985 2.56 15.29a1.5 1.5 0 01-2.12-2.12l5.303-5.305L.44 2.56a1.5 1.5 0 010-2.12z"
							></path>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="none"
							viewBox="0 0 24 24"
							className="transition-all ease-in hover:cursor-pointer xl:hidden"
							onClick={() => {
								setShowMenu(!showMenu);
							}}
						>
							<path
								fill="#F6F6F6"
								d="M20.05 11H3.95a.95.95 0 00-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 00.95-.95v-.1a.95.95 0 00-.95-.95zM20.05 16H3.95a.95.95 0 00-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 00.95-.95v-.1a.95.95 0 00-.95-.95zM20.05 6H3.95a.95.95 0 00-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 00.95-.95v-.1a.95.95 0 00-.95-.95z"
							></path>
						</svg>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
