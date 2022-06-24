import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {
	hairLength,
	hairOptions,
	hairThickness,
	offer,
	procedure,
	setTotalCost,
	totalCost
} from '../../redux/Finally/Finally';
import {IOptions, IThickness, optionsOfHairs, thicknessOfHairs} from '../../redux/HairOptions/HairOptions';

interface ICalculator {
	length: number,
	thickness: string,
	options: string[],
	thickType: IThickness,
	optionType: IOptions
}

const calculateTotalCost = ({
	                            length = 30,
	                            thickness = '',
	                            options = [],
	                            thickType,
	                            optionType
                            }: ICalculator) => {
	debugger

	let totalCost = 0

	if (length < 30) totalCost += 3000
	if (length >= 30 && length < 40) totalCost += 3500
	if (length >= 40 && length <= 45) totalCost += 4000
	if (length > 45) totalCost += 5000

	if (thickness === thickType.thickHard) totalCost += 1000
	if (thickness === thickType.thickMedium) totalCost += 500
	if (thickness === thickType.notThick) totalCost += 0

	options.length && options.forEach(option => {
		if (option === optionType.extended) totalCost += 1500
	})
	return totalCost
}

const TotalCost: FC = () => {
	const currOffer = useAppSelector(offer);
	const length = useAppSelector(hairLength);
	const currThickness = useAppSelector(hairThickness);
	const thicknessTypes = useAppSelector(thicknessOfHairs);
	const options = useAppSelector(hairOptions);
	const currProcedure = useAppSelector(procedure);
	const optionsTypes = useAppSelector(optionsOfHairs);
	const total = useAppSelector(totalCost);

	const dispatch = useAppDispatch();
	const calcOption = {
		length,
		thickness: currThickness,
		options,
		thickType: thicknessTypes,
		optionType: optionsTypes
	}

	useEffect(() => {
		const totalCost = calculateTotalCost(calcOption)
		dispatch(setTotalCost(totalCost))
	}, [])

	return (
		<div>
			<ul>
				<li>Ваша процедура: {currProcedure}</li>
				<li>Длина волос: до {length}см</li>
				<li>Густота волос: {currThickness}</li>
				{options.length ? <li>Также: {options.join(', ')}</li> : ''}
			</ul>
			<h2>Итоговая стоимость {total} руб.</h2>
			<h3>Вы выиграли скидку {currOffer}, она не учитывается в итоговой сумме,
				однако Лера учтёт её при оплате</h3>
		</div>
	);
};

export default TotalCost;
