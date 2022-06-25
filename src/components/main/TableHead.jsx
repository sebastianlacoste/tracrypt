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

	const thGenerator = (width, header) => (
		<th
			className={`w-32 lg:w-36 xl:w-full first:max-w-[50px] py-3 first:px-12 hover:bg-tracrypt-gr-dk text-sm 2xl:text-lg font-extralight tracking-widest first:rounded-tl-xl last:rounded-tr-xl transition-all ${width}`}
			key={keyGenerate()}
		>
			{header}
		</th>
	);

	return tableHeader.map((header) => {
		if (header === "1h" || header === "24h" || header === "7d") {
			return thGenerator("max-w-[100px]", header);
		}

		return thGenerator("", header);
	});
};

export default TableHead;