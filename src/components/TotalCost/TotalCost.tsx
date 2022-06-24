import React, {FC} from 'react';
import {useAppSelector} from '../../hooks/redux';
import {currProcedure, hairLength, hairOptions, hairThickness, offer, totalCost} from '../../redux/Finally';
import {useInit} from '../../hooks/init';

const TotalCost: FC = () => {
	const currOffer = useAppSelector(offer);
	const length = useAppSelector(hairLength);
	const currThickness = useAppSelector(hairThickness);
	const options = useAppSelector(hairOptions);
	const procedure = useAppSelector(currProcedure);
	const total = useAppSelector(totalCost);

	useInit();

	return (
		<div>
			<ul>
				<li>Ваша процедура: {procedure}</li>
				<li>Длина волос: до {length}см</li>
				<li>Густота волос: {currThickness}</li>
				{
					options.length
						? <li>Также: {options.join(', ')}</li>
						: ''
				}
			</ul>
			<h2>Итоговая стоимость {total} руб.</h2>
			<h3>Вы выиграли скидку {currOffer}, она не учитывается в итоговой сумме,
				однако Лера учтёт её при оплате</h3>
		</div>
	);
};

export default TotalCost;
