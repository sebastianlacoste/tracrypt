import keyGenerate from "../../helpers/KeyGenerate";

const TableBody = ({ coinsToShow }) => {
	let stripedEffect = false;

	const tdGenerator = (color, coinValue) => {
		let tdColor = "";
		let tdValue = "";

		if (color === "green") {
			tdColor = "max-w-[100px] text-green-400";
			tdValue = "+" + coinValue + "%";
		} else if (color === "red") {
			tdColor = "max-w-[100px] text-red-400";
			tdValue = coinValue + "%";
		} else {
			tdValue = coinValue;
		}

		return (
			<td
				className={`w-32 lg:w-36 xl:w-36 2xl:w-48 first:max-w-[50px] p-3 first:px-12 whitespace-nowrap ${tdColor}`}
				key={keyGenerate()}
			>
				{tdValue}
			</td>
		);
	};

	return coinsToShow.map((coin) => {
		let positionCounter = 0;

		let tdCoinValues = Object.values(coin).map((coinValue) => {
			/*
				(Example) <td> Color for each "coinValue"

					Array_Position | Color | Value | Property_Name

						0 | white | 30             | rank
						1 | white | Monero (XMR)   | name
						2 | white | $127.36        | price
						3 | red   | -0.08          | change1h
						4 | green | 4.52           | change24h
						5 | green | 19.81          | change7d
						6 | white | $73,245,848    | volume24h
						7 | white | $2,313,413,164 | mktCap	
			*/

			if (positionCounter > 2 && positionCounter < 6) {
				if (coinValue > 0) {
					positionCounter++;
					return tdGenerator("green", coinValue);
				} else {
					positionCounter++;
					return tdGenerator("red", coinValue);
				}
			} else {
				positionCounter++;
				return tdGenerator("", coinValue);
			}
		});

		return (
			<tr
				className={`${
					stripedEffect ? "bg-tracrypt-gr-dk" : "bg-tracrypt-dk"
				} ${(stripedEffect =
					!stripedEffect)} py-2 hover:shadow-md hover:shadow-tracrypt-bl text-center 2xl:text-sm text-xs flex justify-evenly items-center hover:translate-x-1 hover:-translate-y-1 ease-out duration-300 transition-all cursor-default`}
				key={keyGenerate()}
			>
				{tdCoinValues}
			</tr>
		);
	});
};

export default TableBody;
