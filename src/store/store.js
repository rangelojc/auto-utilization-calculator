import { configureStore } from '@reduxjs/toolkit';

import metaReducer from './metaReducer.js';
import fuelReducer from './fuelReducer.js';

export default configureStore({
  reducer: {
    meta: metaReducer,
    fuel: fuelReducer
  }
})