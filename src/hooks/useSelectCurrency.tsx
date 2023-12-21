import styled from '@emotion/styled';
import { Currency } from '../models';
import { useState } from 'react';

const useSelectCurrency = (label: string, options: Currency[]) => {
	const Label = styled.label`
		color: #fff;
		display: block;
		font-weight: 700;
		margin: 15px 0;
		font-size: 24px;
		font-family: 'Lato', sans-serif;
	`;

	const Select = styled.select`
		appearance: none;
		border-radius: 10px;
		border: none;
		display: block;
		font-size: 18px;
		padding: 14px;
		width: 100%;
		font-family: 'Lato', sans-serif;
	`;
	const [state, setState] = useState('');

	const useSelect = () => (
		<>
			<Label htmlFor='currency'>{label}</Label>
			<Select
				name='currency'
				id='currency'
				onChange={(e) => setState(e.target.value)}
				value={state}
			>
				<option value=''>-- Select --</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</Select>
		</>
	);
	return [useSelect];
};

export default useSelectCurrency;
