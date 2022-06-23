import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import CryptoData from "./pages/CryptoData";

import { FilterSelected } from "./context/FilterSelected";

function App() {
	return (
		<BrowserRouter>
			<FilterSelected>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<CryptoData />} />
					</Route>
				</Routes>
			</FilterSelected>
		</BrowserRouter>
	);
}

export default App;
