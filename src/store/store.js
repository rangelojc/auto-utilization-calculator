import { configureStore } from '@reduxjs/toolkit';

import metaReducer from './metaReducer.js';

export default configureStore({
  reducer: {
    meta: metaReducer
  }
})