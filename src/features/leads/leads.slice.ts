import { createSlice } from "@reduxjs/toolkit";
import { createLeadAction } from "./create-lead/create-lead.action";

export interface LeadsState {
  isSubmitting: boolean;
  isSuccess: boolean;
  successMessage: string | null;
  error: string | null;
  isDemoModalOpen: boolean;
}

const initialState: LeadsState = {
  isSubmitting: false,
  isSuccess: false,
  successMessage: null,
  error: null,
  isDemoModalOpen: false,
};

export const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    openDemoModal(state) {
      state.isDemoModalOpen = true;
    },
    closeDemoModal(state) {
      state.isDemoModalOpen = false;
    },
    resetLeadState(state) {
      state.isSubmitting = false;
      state.isSuccess = false;
      state.successMessage = null;
      state.error = null;
      state.isDemoModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLeadAction.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(createLeadAction.fulfilled, (state, { payload }) => {
        state.isSubmitting = false;
        state.isSuccess = true;
        state.successMessage = payload.message || "VIP Demo request submitted successfully!";
      })
      .addCase(createLeadAction.rejected, (state, action) => {
        state.isSubmitting = false;
        state.isSuccess = false;
        state.error = (action.payload as string) || "Failed to submit demo request";
      });
  },
});

export const { openDemoModal, closeDemoModal, resetLeadState } = leadsSlice.actions;
export default leadsSlice.reducer;
