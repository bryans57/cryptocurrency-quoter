import styled from '@emotion/styled';
import { Coin } from '../models';

interface Props {
	coinPrice: Coin;
}

const ShowInfo = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;

	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 30px;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

const Image = styled.img`
	width: 150px;
	display: block;
`;

const Texto = styled.p`
	font-size: 18px;

	span {
		font-weight: bold;
	}
`;

const Price = styled.p`
	font-size: 24px;

	span {
		font-weight: bold;
	}
`;

const CoinInfo = ({ coinPrice }: Props) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		coinPrice;
	return (
		<ShowInfo>
			<Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='crypto image' />
			<div>
				<Price>
					Price: <span>{PRICE}</span>
				</Price>
				<Texto>
					High price today: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					Low price today: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Changes last 24 hours: <span>{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Last update: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</ShowInfo>
	);
};

export default CoinInfo;
