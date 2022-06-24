import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';


interface IWelcome {
  isSpin: boolean,
  Spin: ISpin,
}

interface ISpin {
  stopOffer: boolean,
  offers: string[]
}

const initialState: IWelcome = {
  isSpin: false,
  Spin: {
    stopOffer: false,
    offers: ['5%', '10%', '15%'],
  }
}

const WelcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    setIsSpin: (state, action: PayloadAction<boolean>) => {
      state.isSpin = action.payload
    },
    setStopOffer: (state, action: PayloadAction<boolean>) => {
      state.Spin.stopOffer = action.payload
    },
  }
})

export const isSpin = (state: RootState) => state.welcome.isSpin
export const stopOffer = (state: RootState) => state.welcome.Spin.stopOffer
export const offers = (state: RootState) => state.welcome.Spin.offers
export const {setIsSpin, setStopOffer} = WelcomeSlice.actions

export default WelcomeSlice.reducer
