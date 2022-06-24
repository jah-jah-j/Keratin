import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface IHairOptions {
	lengths: ILength[],
	thickness: IThickness,
	options: IOptions,
}

interface ILength {
	length: number,
	topPos: number
}

export interface IThickness {
	thickHard: string,
	thickMedium: string,
	notThick: string,
}

export interface IOptions {
	extended: string,
	blonde: string,
	damaged: string,
}

const initialState: IHairOptions = {
	lengths: [
		{length: 25, topPos: 240},
		{length: 30, topPos: 290},
		{length: 35, topPos: 340},
		{length: 40, topPos: 390},
		{length: 45, topPos: 440},
	],
	thickness: {
		thickHard: 'Густые',
		thickMedium: 'Средней густоты',
		notThick: 'Редкие',
	},
	options: {
		extended: 'Нарощенные волосы',
		blonde: 'Осветлённые волосы',
		damaged: 'Сильно поврёждённые волосы',
	}
}

const HairOptionsSlice = createSlice({
	name: 'hair-options',
	initialState,
	reducers: {}
})

export const hairLength = (state: RootState) => state.options.lengths
export const thicknessOfHairs = (state: RootState) => state.options.thickness
export const optionsOfHairs = (state: RootState) => state.options.options

export default HairOptionsSlice.reducer
