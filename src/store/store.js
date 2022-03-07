import { configureStore } from '@reduxjs/toolkit';

import metaReducer from './metaReducer.js';
import fuelReducer from './fuelReducer.js';
import configReducer from './configReducer';
import itemizedExpensesReducer from './itemizedExpensesReducer.js';

export default configureStore({
  reducer: {
    meta: metaReducer,
    fuel: fuelReducer,
    config: configReducer,
    itemizedExpenses: itemizedExpensesReducer
  }
})