import styled from '@emotion/styled';
import useSelectCurrency from '../hooks/useSelectCurrency';
import { CurrencyConst } from '../constants';
import { useEffect, useState } from 'react';
import { getCoinList } from '../api';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	margin-top: 30px;
	padding: 10px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 20px;
	border-radius: 0.3rem;
	transition: background-color 0.3s ease;

	&:hover {
		cursor: pointer;
		background-color: #7a7dfe;
	}
`;

const Form = () => {
	const [cryptoCurrency, setCryptoCurrency] = useState([]);
	useEffect(() => {
		const cryptoList = async () => {
			const data = await getCoinList();
			setCryptoCurrency(data);
		};
		cryptoList();
	}, []);

	const [SelectCurrency] = useSelectCurrency(
		'Select your Currency',
		CurrencyConst
	);
	const [SelectCrypto] = useSelectCurrency(
		'Select your Cryptocurrency',
		cryptoCurrency
	);
	return (
		<form>
			<SelectCurrency />
			<SelectCrypto />
			<InputSubmit type='submit' value={'Quote'} />
		</form>
	);
};

export default Form;
