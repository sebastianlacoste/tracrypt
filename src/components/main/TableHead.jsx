import keyGenerate from "../../helpers/KeyGenerate";

const TableHead = () => {
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

	return tableHeader.map((header) => (
		<th
			className="w-full py-3 hover:bg-tracrypt-gr-dk transition-all font-extralight tracking-widest 2xl:text-lg text-sm"
			key={keyGenerate()}
		>
			{header}
		</th>
	));
};

export default TableHead;
