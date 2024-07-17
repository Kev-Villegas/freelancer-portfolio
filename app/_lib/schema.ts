import { z } from "zod";

export const FormDataSchema = z.object({
  fullName: z
    .string()
    .min(4, { message: "Name must be at least 4 characters." })
    .max(30),
  email: z
    .string()
    .min(4, { message: "Email must be at least 4 characters." })
    .email(),
  message: z
    .string()
    .min(18, { message: "Message must be at least 18 characters." })
    .max(500, { message: "Message must contain a maximum of 500 characters" }),
});

export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(6, { message: "Name must be at least 4 characters." })
    .max(30),
  email: z
    .string()
    .min(4, { message: "Email must be at least 4 characters." })
    .email({ message: "Email must be a valid email address." }),
  message: z
    .string()
    .min(18, { message: "Message must be at least 18 characters." })
    .max(500, { message: "Message must contain a maximum of 500 characters" }),
});
