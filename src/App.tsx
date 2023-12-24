import styled from '@emotion/styled';
import CryptoImage from './assets/crypto-image.png';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { getCoinPrice } from './api';
import { Coin, CurrencyCompare } from './models';
import CoinInfo from './components/CoinInfo';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 95%;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Image = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`;

const Heading = styled.h1`
	font-family: 'Lato', sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto;
	}
`;

function App() {
	const [currencys, setCurrencys] = useState({} as CurrencyCompare);
	const [coinPrice, setCoinPrice] = useState({} as Coin);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (Object.keys(currencys).length > 0) {
			setLoading(true);
			const getChangeCoin = async () => {
				return getCoinPrice(currencys);
			};
			getChangeCoin()
				.then((data) => {
					setCoinPrice(data);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
				});
		}
	}, [currencys]);

	return (
		<Contenedor>
			<Image src={CryptoImage} alt='crypto image' />
			<div>
				<Heading>Quote cryptocurrencies instantly</Heading>
				<Form setCurrencys={setCurrencys} />

				{loading && <Spinner />}
				{!loading && coinPrice.PRICE && <CoinInfo coinPrice={coinPrice} />}
			</div>
		</Contenedor>
	);
}

export default App;
