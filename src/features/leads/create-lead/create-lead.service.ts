import { axiosInstance } from "@/config/axios";
import type { CreateLeadPayload, CreateLeadResponse } from "./create-lead.interface";

export const createLeadService = async (
  payload: CreateLeadPayload
): Promise<CreateLeadResponse> => {
  const res = await axiosInstance.post<CreateLeadResponse>(
    "/api/public/leads",
    {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      salonName: payload.salon_name,
      salon_name: payload.salon_name,
      message: payload.notes,
      notes: payload.notes,
    }
  );
  return res.data;
};
