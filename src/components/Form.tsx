import styled from '@emotion/styled';
import useSelectCurrency from '../hooks/useSelectCurrency';
import { CurrencyConst } from '../constants';
import { useEffect, useState } from 'react';
import { getCoinList } from '../api';
import Error from './Error';
import { CurrencyCompare } from '../models';

interface FormProps {
	setCurrencys: React.Dispatch<React.SetStateAction<CurrencyCompare>>;
}

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

const Form = ({ setCurrencys }: FormProps) => {
	const [error, setError] = useState(false);
	const [listCryptoCurrency, setCryptoCurrency] = useState([]);

	useEffect(() => {
		const cryptoList = async () => {
			const data = await getCoinList();
			setCryptoCurrency(data);
		};
		cryptoList();
	}, []);

	const [currency, SelectCurrency] = useSelectCurrency(
		'Select your Currency',
		CurrencyConst
	);
	const [cryptoCurrency, SelectCrypto] = useSelectCurrency(
		'Select your Cryptocurrency',
		listCryptoCurrency
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if ([currency, cryptoCurrency].includes('')) {
			setError(true);
			return;
		}
		setError(false);
		setCurrencys({ crypto: cryptoCurrency, currency });
	};

	return (
		<>
			{error && <Error>All fields are required</Error>}
			<form onSubmit={handleSubmit}>
				<SelectCurrency />
				<SelectCrypto />
				<InputSubmit type='submit' value={'Quote'} />
			</form>
		</>
	);
};

export default Form;
