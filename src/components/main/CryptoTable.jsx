import { useState, useEffect } from "react";

import useFilterSelected from "../../hooks/useFilterSelected";

import coinData from "../../helpers/CoinData";
import OrderSort from "../../helpers/OrderSort";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

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
			className="w-full lg:px-2 overflow-x-visible overflow-y-auto "
			id="coinTable"
		>
			<table className="w-full max-h-full text-tracrypt-wt">
				<thead className="sticky top-0 z-10">
					<tr className="bg-tracrypt-dk-f border-b-2 border-b-tracrypt-bl text-center flex justify-evenly items-center cursor-default">
						<TableHead />
					</tr>
				</thead>
				<tbody>
					<TableBody coinsToShow={coinsData} />
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
