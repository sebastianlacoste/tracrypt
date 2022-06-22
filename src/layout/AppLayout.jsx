import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
	return (
		<>
			<div className="flex flex-col w-full h-screen bg-tracrypt-dk">
				<Header />
				<div className="mt-8 h-full">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AppLayout;
