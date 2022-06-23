import { useState, useEffect } from "react";

import useFilterSelected from "../../hooks/useFilterSelected";

import coinData from "../../helpers/CoinData";
import idGenerate from "../../helpers/IdGenerate";
import {
	volumenSortTop,
	mktCapSortTop,
	mvp1hSortTop,
	mvp24hSortTop,
	mvp7dSortTop,
	volumenSortLow,
	mktCapSortLow,
	mvp1hSortLow,
	mvp24hSortLow,
	mvp7dSortLow,
} from "../../helpers/OrderSort";

const CryptoTable = () => {
	const { currencieChoose, setCurrencieChoose, orderChoose, setOrderChoose } =
		useFilterSelected();
	const [coinRender, setCoinRender] = useState([]);

	useEffect(() => {
		const getApiData = async (currency) => {
			if (currencieChoose === "") {
				setCurrencieChoose("usd");
			}

			if (orderChoose === "") {
				setOrderChoose("Mkt Cap");
			}

			setCoinRender(await coinData(currency));
		};
		getApiData(currencieChoose);

		setInterval(() => {
			getApiData(currencieChoose);
		}, 300000); // Auto-Refresh every 5mins
	}, [currencieChoose, orderChoose]);

	const tableHeader = [
		"#",
		"Coin",
		"Price",
		"1h",
		"24h",
		"7d",
		"24h Vol.",
		"Mkt. Cap",
	];

	const thList = tableHeader.map((header) => (
		<th
			className="w-full py-3 hover:bg-tracrypt-gr-dk transition-all font-extralight tracking-widest text-xl"
			key={`${idGenerate()}`}
		>
			{header}
		</th>
	));

	if (orderChoose === "Mkt CapTop") {
		coinRender.sort(mktCapSortTop);
	} else if (orderChoose === "VolumenTop") {
		coinRender.sort(volumenSortTop);
	} else if (orderChoose === "1hTop") {
		coinRender.sort(mvp1hSortTop);
	} else if (orderChoose === "24hTop") {
		coinRender.sort(mvp24hSortTop);
	} else if (orderChoose === "7dTop") {
		coinRender.sort(mvp7dSortTop);
	} else if (orderChoose === "Mkt CapLow") {
		coinRender.sort(mktCapSortLow);
	} else if (orderChoose === "VolumenLow") {
		coinRender.sort(volumenSortLow);
	} else if (orderChoose === "1hLow") {
		coinRender.sort(mvp1hSortLow);
	} else if (orderChoose === "24hLow") {
		coinRender.sort(mvp24hSortLow);
	} else if (orderChoose === "7dLow") {
		coinRender.sort(mvp7dSortLow);
	}

	let colorChange = false;

	const trList = coinRender.map((data) => {
		const dataArray = Object.values(data);

		let tdCounter = 0;

		let tdListGen = dataArray.map((coinInfo) => {
			if (tdCounter > 2 && tdCounter < 6) {
				if (coinInfo > 0) {
					tdCounter++;
					return (
						<td className="w-full p-3 text-green-400" key={idGenerate()}>
							+{coinInfo}%
						</td>
					);
				} else {
					tdCounter++;
					return (
						<td className="w-full p-3 text-red-400" key={idGenerate()}>
							{coinInfo}%
						</td>
					);
				}
			} else {
				tdCounter++;
				return (
					<td className="w-full p-3" key={idGenerate()}>
						{coinInfo}
					</td>
				);
			}
		});

		return (
			<tr
				className={`${
					colorChange ? "bg-tracrypt-gr-dk" : "bg-tracrypt-dk"
				} ${(colorChange =
					!colorChange)} py-2 pr-8 flex justify-evenly items-center transition-all text-center hover:shadow-md hover:shadow-tracrypt-bl hover:scale-105 ease-out duration-300 cursor-default`}
			>
				{tdListGen}
			</tr>
		);
	});

	return (
		<div
			className="w-11/12 text-tracrypt-wt bg-tracrypt-dk rounded-tl-lg shadow-2xl shadow-black max-h-full overflow-y-auto overflow-x-hidden"
			id="coinTable"
		>
			<div>
				<table className="w-full">
					<thead>
						<tr className="flex justify-evenly items-center bg-tracrypt-dk-f text-center border-b-2 border-b-tracrypt-bl cursor-default pr-8">
							{thList}
						</tr>
					</thead>
					<tbody>{trList}</tbody>
				</table>
			</div>
		</div>
	);
};

export default CryptoTable;
