import { Currency, CurrencyCompare } from '../models';

export const getCoinList = async () => {
	const response = await fetch(
		'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
	);
	const result = await response.json();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return result.Data.map((coin: any) => {
		const object: Currency = {
			id: coin.CoinInfo.Name,
			name: coin.CoinInfo.FullName,
		};
		return object;
	});
};

export const getCoinPrice = async ({ currency, crypto }: CurrencyCompare) => {
	const response = await fetch(
		`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
	);
	const result = await response.json();
	const coin = result.DISPLAY[crypto][currency];
	return coin;
};
