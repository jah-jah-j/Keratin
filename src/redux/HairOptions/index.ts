import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface IProcedure {
	keratin: string,
	botox: string,
	anything: string,
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

interface IHairOptions {
	lengths: ILength[],
	thickness: IThickness,
	options: IOptions,
	procedure: IProcedure
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
	},
	procedure: {
		keratin: 'Кератин',
		botox: 'Ботокс',
		anything: 'Не знаю',
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
export const hairProcedure = (state: RootState) => state.options.procedure

export default HairOptionsSlice.reducer
