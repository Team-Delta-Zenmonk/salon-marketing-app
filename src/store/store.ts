import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leadsReducer from "../features/leads/leads.slice";

const rootReducer = combineReducers({
  leads: leadsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
