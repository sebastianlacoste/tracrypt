import Filter from "../components/aside/Filter";
import CryptoTable from "../components/main/CryptoTable";

const CryptoData = () => {
	return (
		<>
			<div className="h-screen xl:mx-auto flex xl:gap-6 2xl:gap-12">
				<Filter />
				<CryptoTable />
			</div>
		</>
	);
};

export default CryptoData;
