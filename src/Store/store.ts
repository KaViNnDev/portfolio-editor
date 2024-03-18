import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './modeSlice';
import sectionsReducer from './sectionsSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    sections: sectionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { mode: modeReducer, sections: sectionsReducer, }
export type AppDispatch = typeof store.dispatch;
