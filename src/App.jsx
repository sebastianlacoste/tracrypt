import { BrowserRouter, Routes, Route} from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import CryptoData from "./pages/CryptoData";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<CryptoData />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
