import { z } from "zod";

const username = z.string().min(4, {
  message: "Username must be at least 4 characters.",
});

const password = z.string().min(6, {
  message: "Password must be at least 6 characters.",
});

export const loginSchema = z.object({
  username,
  password,
});

export const registerSchema = z.object({
  email: z.string().email(),
  username,
  password,
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
