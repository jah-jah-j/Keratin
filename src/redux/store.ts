import welcomeReducer from './Welcome/Welcome';
import hairOptionsReducer from './HairOptions/HairOptions';
import finallyReducer from './Finally/Finally';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    welcome: welcomeReducer,
    options: hairOptionsReducer,
    finally: finallyReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
