import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getSubscriptionPlansService,
  type ListPlansParams,
  type ListPlansResponse,
} from "./plans.service";

export const fetchSubscriptionPlans = createAsyncThunk<
  ListPlansResponse,
  ListPlansParams | void,
  { rejectValue: string }
>("plans/fetchSubscriptionPlans", async (params, thunkAPI) => {
  try {
    const res = await getSubscriptionPlansService(params || undefined);
    return res;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch subscription plans"
      );
    }
    return thunkAPI.rejectWithValue("Failed to fetch subscription plans");
  }
});
