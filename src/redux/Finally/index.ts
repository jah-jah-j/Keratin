import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IFinally} from '../../models/types';

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
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
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

export const userName = (state: RootState) => state.finally.name
export const offer = (state: RootState) => state.finally.offer
export const hairLength = (state: RootState) => state.finally.hairLength
export const hairThickness = (state: RootState) => state.finally.hairThickness
export const hairOptions = (state: RootState) => state.finally.hairOptions
export const currProcedure = (state: RootState) => state.finally.procedure
export const totalCost = (state: RootState) => state.finally.totalCost

export const {
	setName,
	setFinallyOffer,
	setProcedure,
	setHairThickness,
	setHairLength,
	setHairOptions,
	setTotalCost
} = FinallySlice.actions

export default FinallySlice.reducer
