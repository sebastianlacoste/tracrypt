const priceFormat = (price, currencie) => {
	return new Intl.NumberFormat(`${currencie === "usd" ? "en-US" : "de-DE"}`, {
		style: "currency",
		currency: `${currencie.toUpperCase()}`,
	}).format(price);
};

export const price = (price, currencie, cutDecimals) => {
	if (currencie === "usd") {
		const usdCurrency = priceFormat(price, currencie);

		if (cutDecimals) {
			return usdCurrency.toString().split(".")[0];
		}

		return usdCurrency;
	} else if (currencie === "eur") {
		const eurCurrency = priceFormat(price, currencie);

		if (cutDecimals) {
			return eurCurrency.toString().split(",")[0].concat(" €");
		}

		return eurCurrency;
	}
};

export const round = (number) => {
	return Math.round(number * 100) / 100;
};

/* TEST-FORMATS

    TEST: 404588599422
    EUR: 404.588.599.422,00 €
    USD: $404,588,599,422.00

*/