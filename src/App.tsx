import styled from '@emotion/styled';
import CryptoImage from './assets/crypto-image.png';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { getCoinPrice } from './api';
import { CurrencyCompare } from './models';

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
	const [coinPrice, setCoinPrice] = useState({});

	useEffect(() => {
		if (Object.keys(currencys).length > 0) {
			const getChangeCoin = async () => {
				console.log(currencys);
				return getCoinPrice(currencys);
			};
			getChangeCoin().then((data) => {
				setCoinPrice(data);
			});
		}
	}, [currencys]);

	return (
		<Contenedor>
			<Image src={CryptoImage} alt='crypto image' />
			<div>
				<Heading>Quote cryptocurrencies instantly</Heading>
				<Form setCurrencys={setCurrencys} />
			</div>
		</Contenedor>
	);
}

export default App;
