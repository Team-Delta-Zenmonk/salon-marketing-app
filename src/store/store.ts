import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leadsReducer from "../features/leads/leads.slice";
import plansReducer from "../features/plans/plans.slice";

const rootReducer = combineReducers({
  leads: leadsReducer,
  plans: plansReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
