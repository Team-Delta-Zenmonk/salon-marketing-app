import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchSubscriptionPlans } from "./plans.action";
import type { ListPlansResponse } from "./plans.service";

export interface BackendPlan {
  id: number | string;
  uuid?: string;
  code?: string;
  name: string;
  amount: number;
  formatted_price: string;
  currency: string;
  billing_cycle: string;
  description: string | null;
  duration_days?: number;
  is_active?: boolean;
}

export interface PlansState {
  plans: BackendPlan[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  isLoading: boolean;
  isInitialLoading: boolean;
  error: string | null;
}

const initialState: PlansState = {
  plans: [],
  total: 0,
  page: 1,
  limit: 10,
  hasMore: false,
  isLoading: false,
  isInitialLoading: true,
  error: null,
};

export { fetchSubscriptionPlans };

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    clearPlansError(state) {
      state.error = null;
    },
    clearPlans(state) {
      state.plans = [];
      state.total = 0;
      state.page = 1;
      state.hasMore = false;
      state.isLoading = false;
      state.isInitialLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionPlans.pending, (state, { meta }) => {
        state.isLoading = true;
        state.error = null;
        const page = meta.arg?.page ?? 1;
        if (page === 1) {
          state.isInitialLoading = true;
        }
      })
      .addCase(fetchSubscriptionPlans.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isInitialLoading = false;
        const payload = action.payload || {};
        const incomingPlans = Array.isArray(payload.plans)
          ? payload.plans
          : Array.isArray(payload)
          ? payload
          : [];

        const pagination = payload.pagination || {
          total: incomingPlans.length,
          page: 1,
          limit: incomingPlans.length || 10,
        };

        if (pagination.page === 1) {
          state.plans = incomingPlans;
        } else {
          const existingIds = new Set(state.plans.map((p) => p.id));
          const newPlans = incomingPlans.filter((p: BackendPlan) => !existingIds.has(p.id));
          state.plans = [...state.plans, ...newPlans];
        }

        state.total = pagination.total ?? incomingPlans.length;
        state.page = pagination.page ?? 1;
        state.limit = pagination.limit ?? 10;
        state.hasMore = state.plans.length < state.total;
      })
      .addCase(fetchSubscriptionPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isInitialLoading = false;
        state.error = (action.payload as string) || "Failed to fetch subscription plans";
      });
  },
});

export const { clearPlansError, clearPlans } = plansSlice.actions;
export default plansSlice.reducer;
