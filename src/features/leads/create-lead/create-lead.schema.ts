import { z } from "zod";
import { VALIDATE_PATTERN } from "../../../common/enums/validate-pattern";
export const createLeadSchema = z.object({
  name: z
    .string()
    .min(1, "Required")
    .max(250, "Name cannot exceed 250 characters")
    .regex(VALIDATE_PATTERN.alphabet, { message: "Only alphabets are allowed" }),
  salon_name: z
    .string()
    .min(1, "Required")
    .max(250, "Salon name cannot exceed 250 characters")
    .regex(VALIDATE_PATTERN.alphabetWithSpecial, { message: "Only alphabets and special characters are allowed" }),
  email: z
    .string()
    .min(1, "Required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),
  phone: z
    .string()
    .max(10, "Phone number cannot exceed 10 digits")
    .regex(VALIDATE_PATTERN.number, { message: "Only numbers are allowed" })
,
  notes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters"),
});

export type CreateLeadFormValues = z.infer<typeof createLeadSchema>;

export const demoFormSchema = createLeadSchema;
export type DemoFormValues = CreateLeadFormValues;
