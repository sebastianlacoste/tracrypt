import Filter from "../components/aside/Filter";
import CryptoTable from "../components/main/CryptoTable";

const CryptoData = () => {
	return (
		<>
			<main className="flex gap-10 h-full">
				<Filter />
				<CryptoTable />
			</main>
		</>
	);
};

export default CryptoData;
