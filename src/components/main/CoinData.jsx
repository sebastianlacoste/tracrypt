// ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol.", "Mkt. Cap"];

const CoinData = () => {
	let colorChange = false;

	const tableBody = [
		{
			id: "1",
			coin: "Bitcoin BTC",
			price: "$20,206.60",
			hour1: "-1.1%",
			hour24: "2.4%",
			week: "5.4%",
			volume: "$24,118,373,349",
			mktCap: "$556,801,193,885",
		},
		{
			id: "2",
			coin: "Etherum ETH",
			price: "$1,206.60",
			hour1: "-1.1%",
			hour24: "2.4%",
			week: "5.4%",
			volume: "$24,118,373,349",
			mktCap: "$556,801,193,885",
		},
		{
			id: "3",
			coin: "Monero XMR",
			price: "$106.60",
			hour1: "-1.1%",
			hour24: "2.4%",
			week: "5.4%",
			volume: "$24,118,373,349",
			mktCap: "$556,801,193,885",
		},
		{
			id: "4",
			coin: "Chainlink",
			price: "$7.60",
			hour1: "-1.1%",
			hour24: "2.4%",
			week: "5.4%",
			volume: "$24,118,373,349",
			mktCap: "$556,801,193,885",
		},
	];

	// Obtenemos el Objeto del Array
	const tdList = tableBody.map((data) => {
		// Obtenemos los valores del Objeto en un Array
		const dataArray = Object.values(data);

		// Recorremos los valores obtenidos para generar los <td>
		let tdListGen = dataArray.map((coinInfo) => (
			<td className="w-full p-3">{coinInfo}</td>
		));

		return (
			<tr
				className={`${
					colorChange
						? "bg-tracrypt-gr-dk"
						: "bg-tracrypt-dk"
				} ${(colorChange =
					!colorChange)} flex justify-evenly items-center transition-all text-center hover:shadow-md hover:shadow-tracrypt-bl hover:scale-105 cursor-default`}
			>
				{tdListGen}
			</tr>
		);
	});

	return <>{tdList}</>;
};

export default CoinData;
