import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface IFinally {
	name: string,
	offer: string,
	hairLength: number,
	hairThickness: string,
	hairOptions: string[],
	procedure: string,
	totalCost: number,
}

const initialState: IFinally = {
	name: '',
	offer: '',
	hairLength: 0,
	hairThickness: '',
	hairOptions: [],
	procedure: '',
	totalCost: 0,
}

const FinallySlice = createSlice({
	name: 'finally',
	initialState,
	reducers: {
		setFinallyOffer: (state, action: PayloadAction<string>) => {
			state.offer = action.payload
		},
		setHairLength: (state, action: PayloadAction<number>) => {
			state.hairLength = action.payload
		},
		setHairThickness: (state, action: PayloadAction<string>) => {
			state.hairThickness = action.payload
		},
		setHairOptions: (state, action: PayloadAction<string[]>) => {
			state.hairOptions = action.payload
		},
		setProcedure: (state, action: PayloadAction<string>) => {
			state.procedure = action.payload
		},
		setTotalCost: (state, action: PayloadAction<number>) => {
			state.totalCost = action.payload
		},
	}
})

export const offer = (state: RootState) => state.finally.offer
export const hairLength = (state: RootState) => state.finally.hairLength
export const hairThickness = (state: RootState) => state.finally.hairThickness
export const hairOptions = (state: RootState) => state.finally.hairOptions
export const procedure = (state: RootState) => state.finally.procedure
export const totalCost = (state: RootState) => state.finally.totalCost

export const {
	setFinallyOffer,
	setProcedure,
	setHairThickness,
	setHairLength,
	setHairOptions,
	setTotalCost
} = FinallySlice.actions

export default FinallySlice.reducer
