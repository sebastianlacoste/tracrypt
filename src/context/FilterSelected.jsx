import { createContext, useState, useEffect } from "react";

const FilterContext = createContext();

export const FilterSelected = ({ children }) => {
	const [currencieChoose, setCurrencieChoose] = useState("usd");
	const [orderChoose, setOrderChoose] = useState("Mkt Cap");

	return (
		<FilterContext.Provider
			value={{
				currencieChoose,
				setCurrencieChoose,
				orderChoose,
				setOrderChoose,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContext;
