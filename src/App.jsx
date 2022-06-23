import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import CryptoData from "./pages/CryptoData";

import { FilterSelected } from "./context/FilterSelected";
import { MenuProvider } from "./context/MenuProvider";

function App() {
	return (
		<BrowserRouter>
			<MenuProvider>
				<FilterSelected>
					<Routes>
						<Route path="/" element={<AppLayout />}>
							<Route index element={<CryptoData />} />
						</Route>
					</Routes>
				</FilterSelected>
			</MenuProvider>
		</BrowserRouter>
	);
}

export default App;
