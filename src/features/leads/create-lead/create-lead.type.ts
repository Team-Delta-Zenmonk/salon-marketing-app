export const createLeadType = "marketing/leads/create";

export interface CreateLeadPayload {
  name: string;
  salon_name: string;
  email: string;
  phone: string;
  team_size: string;
  notes?: string;
}

export interface CreateLeadResponse {
  success: boolean;
  message: string;
  lead?: {
    id: string;
    name: string;
    email: string;
  };
}
