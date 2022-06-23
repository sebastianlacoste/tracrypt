export const volumenSortTop = (a, b) => {
	return (
		b.volume24h.toString().replace(/\D/g, "") -
		a.volume24h.toString().replace(/\D/g, "")
	);
};

export const volumenSortLow = (a, b) => {
	return (
		a.volume24h.toString().replace(/\D/g, "") -
		b.volume24h.toString().replace(/\D/g, "")
	);
};

export const mktCapSortTop = (a, b) => {
	return (
		b.mktCap.toString().replace(/\D/g, "") -
		a.mktCap.toString().replace(/\D/g, "")
	);
};

export const mktCapSortLow = (a, b) => {
	return (
		a.mktCap.toString().replace(/\D/g, "") -
		b.mktCap.toString().replace(/\D/g, "")
	);
};

export const mvp1hSortTop = (a, b) => {
	return b.change1h.toString() - a.change1h.toString();
};

export const mvp1hSortLow = (a, b) => {
	return a.change1h.toString() - b.change1h.toString();
};

export const mvp24hSortTop = (a, b) => {
	return b.change24h.toString() - a.change24h.toString();
};

export const mvp24hSortLow = (a, b) => {
	return a.change24h.toString() - b.change24h.toString();
};

export const mvp7dSortTop = (a, b) => {
	return b.change7d.toString() - a.change7d.toString();
};

export const mvp7dSortLow = (a, b) => {
	return a.change7d.toString() - b.change7d.toString();
};
