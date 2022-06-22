import CoinData from "./CoinData";

const CryptoTable = () => {

	const tableHeader = ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol.", "Mkt. Cap"];
	const thList = tableHeader.map((header) => <th className="w-full py-3 hover:bg-tracrypt-gr-dk transition-all font-extralight tracking-widest text-xl ">{header}</th>);

	return (
		<div className="w-11/12 text-tracrypt-wt bg-tracrypt-dk rounded-tl-lg shadow-2xl shadow-black max-h-full overflow-hidden">
			<div>
				<table className="w-full">
					<thead>
						<tr className="flex justify-evenly items-center bg-tracrypt-dk-f text-center border-b-2 border-b-tracrypt-bl cursor-default">
							{thList}
						</tr>
					</thead>
					<tbody >
						<CoinData />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CryptoTable;
