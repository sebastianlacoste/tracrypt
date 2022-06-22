import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
	return (
		<>
			<div className="min-w-full max-w-fill min-h-full max-h-full bg-tracrypt-dk flex flex-col justify-between gap-8">
				<Header />
				<Outlet />
			</div>
		</>
	);
};

export default AppLayout;
