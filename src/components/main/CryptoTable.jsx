const CryptoTable = () => {
	const tableHeader = ["#", "Coin", "Price", "1h", "24h", "7d", "24h Vol.", "Mkt. Cap"];
	const thList = tableHeader.map((header) => <th>{header}</th>);

	return (
		<div className="w-11/12 text-tracrypt-wt bg-tracrypt-dk rounded-tl-lg shadow-2xl shadow-black max-h-full">
			<div className="">
				<table className="w-full">
					<thead>
						<tr className="flex justify-around items-center bg-tracrypt-dk-f py-3 text-center border-b-2 border-b-tracrypt-bl shadow-lg shadow-black cursor-default">
							{thList}
						</tr>
					</thead>
					<tbody>
						<tr></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CryptoTable;
