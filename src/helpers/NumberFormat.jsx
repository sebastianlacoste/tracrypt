const priceFormat = (price, currency) => {
	return new Intl.NumberFormat(`${currency === "usd" ? "en-US" : "de-DE"}`, {
		style: "currency",
		currency: `${currency.toUpperCase()}`,
	}).format(price);
};

export const price = (price, currency, cutDecimals) => {
	if (price > 1) {
		const formattedPrice = priceFormat(price, currency);

		if (cutDecimals && currency === "usd") {
			return formattedPrice.toString().split(".")[0];
		} else if (cutDecimals && currency === "eur") {
			return formattedPrice.toString().split(",")[0].concat(" €");
		}

		return formattedPrice;
	} else {
		if (currency === "usd") {
			return "$" + price.toString();
		} else if (currency === "eur") {
			return price.toString().concat(" €");
		}
	}
};

export const round = (number) => {
	return Math.round(number * 100) / 100;
};
