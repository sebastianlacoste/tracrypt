const priceFormat = (price, currencie) => {
	return new Intl.NumberFormat(`${currencie === "usd" ? "en-US" : "de-DE"}`, {
		style: "currency",
		currency: `${currencie.toUpperCase()}`,
	}).format(price);
};

export const price = (price, currencie, cutDecimals) => {
	if (currencie === "usd") {
		if (price > 1) {
			const usdCurrency = priceFormat(price, currencie);

			if (cutDecimals) {
				return usdCurrency.toString().split(".")[0];
			}

			return usdCurrency;
		} else {
			return "$" + price.toString();
		}
	} else if (currencie === "eur") {
		if (price > 1) {
			const eurCurrency = priceFormat(price, currencie);

			if (cutDecimals) {
				return eurCurrency.toString().split(",")[0].concat(" €");
			}

			return eurCurrency;
		} else {
			return price.toString().concat(" €");
		}
	}
};

export const round = (number) => {
	return Math.round(number * 100) / 100;
};
