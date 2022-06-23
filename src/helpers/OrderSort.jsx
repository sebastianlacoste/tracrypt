export const volumenSort = (a, b) => {
	return b.volume24h.toString().replace(/\D/g,'') - a.volume24h.toString().replace(/\D/g,'');
};

export const mktCapSort = (a, b) => {
	return b.mktCap.toString().replace(/\D/g,'') - a.mktCap.toString().replace(/\D/g,'');
};
