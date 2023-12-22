import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ErrorProps {
	children: ReactNode;
}

const Texto = styled.div`
	background-color: #b73212;
	padding: 15px;
	color: #fff;
	font-family: 'Lato', sans-serif;
	font-size: 22px;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
`;

const Error = ({ children }: ErrorProps) => {
	return <Texto>{children}</Texto>;
};

export default Error;
