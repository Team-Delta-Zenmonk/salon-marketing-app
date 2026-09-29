import { axiosInstance } from "@/config/axios";
import type { CreateLeadPayload, CreateLeadResponse } from "./create-lead.interface";

export const createLeadService = async (
  payload: CreateLeadPayload
): Promise<CreateLeadResponse> => {
  const res = await axiosInstance.post<CreateLeadResponse>(
    "/api/public/leads",
    payload
  );
  return res.data;
};
