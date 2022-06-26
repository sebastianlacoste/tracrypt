import keyGenerate from "../../helpers/KeyGenerate";

const TableHead = ({ syncStyles }) => {
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
	const thGenerator = (header, thClass = "") => (
		<th
			className={`2xl:text-lg font-extralight tracking-widest ${syncStyles.thTdStyle} ${thClass}`}
			key={keyGenerate()}
		>
			{header}
		</th>
	);

	const thValues = tableHeader.map((header) => {
		if (header === "Coin") {
			return thGenerator(header, syncStyles.coin);
		} else if (header === "1h" || header === "24h" || header === "7d") {
			return thGenerator(header, syncStyles.changes);
		} else if (header === "Price") {
			return thGenerator(header, syncStyles.price);
		} else if (header === "24h Vol." || header === "Mkt. Cap") {
			return thGenerator(header, syncStyles.volumeMktCap);
		} else {
			return thGenerator(header);
		}
	});

	return (
		<tr className="bg-tracrypt-dk-f border-b-2 border-b-tracrypt-bl flex justify-evenly items-center cursor-default">
			{thValues}
		</tr>
	);
};

export default TableHead;
