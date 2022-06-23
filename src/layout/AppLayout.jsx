import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import pwa from "../pwa/app";

const AppLayout = () => {

	useEffect(() => {
		pwa();
	}, []);

	return (
		<>
			<div className="min-w-full max-w-fill min-h-full max-h-full bg-tracrypt-dk flex flex-col justify-between 2xl:gap-8">
				<Header />
				<Outlet />
			</div>
		</>
	);
};

export default AppLayout;
