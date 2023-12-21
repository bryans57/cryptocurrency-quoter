import { Currency } from '../models';

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
