import {useEffect} from 'react';
import {
	setFinallyOffer,
	setHairLength,
	setHairOptions,
	setHairThickness,
	setName,
	setProcedure,
	setTotalCost
} from '../redux/Finally';
import {useAppDispatch, useAppSelector} from './redux';
import {IOptions, IThickness, optionsOfHairs, thicknessOfHairs} from '../redux/HairOptions';

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

export const useInit = () => {
	const dispatch = useAppDispatch();
	const thicknessTypes = useAppSelector(thicknessOfHairs);
	const optionsTypes = useAppSelector(optionsOfHairs);

	useEffect(() => {
		const name = localStorage.getItem('name');
		const offer = localStorage.getItem('offer');
		const length = localStorage.getItem('length');
		const thickness = localStorage.getItem('thickness');
		const options = localStorage.getItem('options')?.split(',');
		const procedure = localStorage.getItem('procedure');
		let totalCost = localStorage.getItem('totalCost') || 0;

		const calcOption = {
			length: length ? +length : 30,
			thickness: thickness ? thickness : '',
			options: options ? options : [''],
			thickType: thicknessTypes,
			optionType: optionsTypes
		}

		if (!totalCost) {
			totalCost = calculateTotalCost(calcOption)
		}

		dispatch(setTotalCost(+totalCost))

		if (name) dispatch(setName(name))
		if (offer) dispatch(setFinallyOffer(offer))
		if (length) dispatch(setHairLength(+length))
		if (thickness) dispatch(setHairThickness(thickness))
		if (options) dispatch(setHairOptions(options))
		if (procedure) dispatch(setProcedure(procedure))
		if (totalCost) dispatch(setTotalCost(+totalCost))
	}, [])
}
