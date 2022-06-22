import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
	return (
		<>
			<div className="w-full h-screen bg-tracrypt-dk">
				<Header />
				<div className="mt-10">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AppLayout;
