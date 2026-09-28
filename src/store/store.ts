import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leadsReducer from "../features/leads/leads.slice";
import plansReducer from "../features/plans/plans.slice";

const rootReducer = combineReducers({
  leads: leadsReducer,
  plans: plansReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
