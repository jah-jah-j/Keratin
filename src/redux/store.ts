import welcomeReducer from './Welcome';
import hairOptionsReducer from './HairOptions';
import finallyReducer from './Finally';
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
