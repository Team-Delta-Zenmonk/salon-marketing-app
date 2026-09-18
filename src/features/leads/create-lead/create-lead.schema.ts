import { z } from "zod";

export const createLeadSchema = z.object({
  name: z
    .string()
    .min(1, "Required")
    .max(250, "Name cannot exceed 250 characters"),
  salon_name: z
    .string()
    .min(1, "Required")
    .max(250, "Salon name cannot exceed 250 characters"),
  email: z
    .string()
    .min(1, "Required")
    .email("Please enter a valid email address")
    .max(250, "Email cannot exceed 250 characters"),
  phone: z
    .string()
    .refine((val) => !val || /^\d+$/.test(val), {
      message: "Phone number must contain only numbers",
    })
    .refine((val) => !val || val.length <= 15, {
      message: "Phone number cannot exceed 15 digits",
    }),
  notes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters"),
});

export type CreateLeadFormValues = z.infer<typeof createLeadSchema>;

// Aliases for compatibility
export const demoFormSchema = createLeadSchema;
export type DemoFormValues = CreateLeadFormValues;
