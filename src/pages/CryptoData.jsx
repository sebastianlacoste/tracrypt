import Filter from "../components/aside/Filter";
import CryptoTable from "../components/main/CryptoTable";

const CryptoData = () => {
	return (
		<>
			<div className="flex gap-10 h-screen">
				<Filter />
				<CryptoTable />
			</div>
		</>
	);
};

export default CryptoData;
