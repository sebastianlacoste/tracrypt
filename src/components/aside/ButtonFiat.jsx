import useFilterSelected from "../../hooks/useFilterSelected";

const ButtonFiat = ({ fiatCurrencie }) => {
	const { currencieChoose, setCurrencieChoose } = useFilterSelected();
	return (
		<button
			className={`w-1/2 py-2 bg-tracrypt-gr-dk ${
				currencieChoose === fiatCurrencie.toLowerCase()
					? "bg-tracrypt-bl-dk"
					: `bg-tracrypt-dk`
			}`}
			onClick={() => {
				setCurrencieChoose(fiatCurrencie.toLowerCase());
			}}
		>
			{fiatCurrencie.toUpperCase()}
		</button>
	);
};

export default ButtonFiat;
