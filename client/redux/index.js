import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import candidatesReducer from './candidates';

const storeObject = configureStore({
	reducer: candidatesReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: axios,
			},
		}),
});

export default storeObject;
