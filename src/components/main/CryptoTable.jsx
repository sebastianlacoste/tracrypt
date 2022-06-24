import { useState, useEffect } from "react";

import useFilterSelected from "../../hooks/useFilterSelected";

import coinData from "../../helpers/CoinData";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

import OrderSort from "../../helpers/OrderSort";

const CryptoTable = () => {
	const { selectedCurrency, setSelectedCurrency, orderChoose, setOrderChoose } =
		useFilterSelected();
	const [coinsData, setCoinsData] = useState([]);

	useEffect(() => {
		const getApiData = async (currency) => {
			if (selectedCurrency === "") {
				setSelectedCurrency("usd");
			}

			if (orderChoose === "") {
				setOrderChoose("Mkt Cap");
			}

			setCoinsData(await coinData(currency));
		};

		getApiData(selectedCurrency);

		setInterval(() => {
			getApiData(selectedCurrency);
		}, 300000); // Auto-Refresh every 5mins
	}, [selectedCurrency, orderChoose]);

	coinsData.sort(OrderSort(orderChoose));

	return (
		<div
			className="2xl:w-11/12 w-full text-tracrypt-wt bg-tracrypt-dk rounded-tl-lg shadow-2xl shadow-black max-h-full overflow-y-auto overflow-x-auto"
			id="coinTable"
		>
			<div>
				<table className="w-full overflow-x-auto">
					<thead>
						<tr className="flex justify-evenly items-center bg-tracrypt-dk-f text-center border-b-2 border-b-tracrypt-bl cursor-default pr-8">
							<TableHead />
						</tr>
					</thead>
					<tbody>
						<TableBody coinsToShow={coinsData} />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CryptoTable;
