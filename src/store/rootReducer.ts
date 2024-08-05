// store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import occupiedTimesReducer from './occupiedTimesSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    occupiedTimes: occupiedTimesReducer,
});

export default rootReducer;
