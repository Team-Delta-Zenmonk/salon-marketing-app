import { createAsyncThunk } from "@reduxjs/toolkit";
import { createLeadService } from "./create-lead.service";
import type { CreateLeadPayload, CreateLeadResponse } from "./create-lead.interface";
import { createLeadType } from "./create-lead.interface";

export const createLeadAction = createAsyncThunk<
  CreateLeadResponse,
  CreateLeadPayload,
  { rejectValue: string }
>(createLeadType, async (payload, thunkAPI) => {
  try {
    const res = await createLeadService(payload);
    return res;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err?.response?.data?.message || "Failed to submit demo request"
    );
  }
});
