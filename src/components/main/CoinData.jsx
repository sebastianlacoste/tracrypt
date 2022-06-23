import clientAxios from "../../config/clientAxios";
import { useState, useEffect } from "react";

import { round, price } from "../../helpers/NumberFormat";

import useFilterSelected from "../../hooks/useFilterSelected";

const CoinData = () => {
	const [coinList, setCoinList] = useState([]);

	const { currencieChoose, orderChoose } = useFilterSelected();

	console.log(`CURRENCIE: ${currencieChoose} | ORDER: ${orderChoose}`);

	let colorChange = false;

	useEffect(() => {
		const marketReq = async () => {
			const { data } = await clientAxios(
				`/coins/markets?vs_currency=${currencieChoose}&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
			);

			const coinData = Object.values(data).map((coin) => {
				return {
					rank: coin.market_cap_rank,
					name: `${coin.name} (${coin.symbol.toUpperCase()})`,
					price: `${price(coin.current_price, currencieChoose, false)}`,
					change1h: round(coin.price_change_percentage_1h_in_currency),
					change24h: round(coin.price_change_percentage_24h_in_currency),
					change7d: round(coin.price_change_percentage_7d_in_currency),
					volume24h: price(coin.total_volume, currencieChoose, true),
					mktCap: price(coin.market_cap, currencieChoose, true),
				};
			});

			setCoinList(coinData);
		};
		marketReq();
		setInterval(() => {
			marketReq();
		}, 300000); // Refresh cada 5min
	}, [currencieChoose]);

	useEffect(() => {
		switch (orderChoose) {
			case "Volumen":
				break;
			default:
				return;
		}
	}, [orderChoose]);

	const trList = coinList.map((data) => {
		const dataArray = Object.values(data);

		let tdCounter = 0;

		let tdListGen = dataArray.map((coinInfo) => {
			if (tdCounter > 2 && tdCounter < 6) {
				if (coinInfo > 0) {
					tdCounter++;
					return <td className="w-full p-3 text-green-400">+{coinInfo}%</td>;
				} else {
					tdCounter++;
					return <td className="w-full p-3 text-red-400">{coinInfo}%</td>;
				}
			} else {
				tdCounter++;
				return <td className="w-full p-3">{coinInfo}</td>;
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

	return <>{trList}</>;
};

export default CoinData;

// Mkt Cap, Volumen, Gainers
