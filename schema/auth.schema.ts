import z from "zod";

export const signupSchema = z.object({
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, "Phone number must be in E164 format"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(6, "Password is required"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Email is required"),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export type LoginFormValues = z.infer<typeof loginSchema>;

export type SignupFormValues = z.infer<typeof signupSchema>;