// ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol.", "Mkt. Cap"];

const CoinData = () => {
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
	];

	const tdList = tableBody.map((data) => {
		const dataArray = Object.values(data);

		let tdListGen = dataArray.map((coinInfo) => (
			<td className="w-full p-3 hover:bg-tracrypt-gr-dk transition-all">
				{coinInfo}
			</td>
		));

		return (
			<tr className="flex justify-evenly items-center bg-tracrypt-dk-f text-center border-b-2 border-b-tracrypt-bl shadow-lg shadow-black cursor-default">
				{tdListGen}
			</tr>
		);
	});

	return <>{tdList}</>;
};

export default CoinData;
