'use server';

import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { FormActionState } from '../definitions/FormActionState';

// Define schema with Zod
export const LogInFormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .nonempty('Email is required')
    .email('Invalid format for email'),
  password: z
    .string({ required_error: 'Password is required' })
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

// Infer the type from the schema
export type LogInFormData = z.infer<typeof LogInFormSchema>;

// Simulated async server action (like calling an API)
export const logInAction = async (
  _: FormActionState<LogInFormData>,
  formData: FormData
): Promise<FormActionState<LogInFormData>> => {
  try {
    const payload = Object.fromEntries(formData.entries()) as LogInFormData;
    const { success, data, error } = LogInFormSchema.safeParse(payload);

    if (!success) {
      const rawErrors = error.flatten().fieldErrors;

      // 🔽 Only take the first error per field
      const firstErrors: Record<string, string> = {};
      for (const key of Object.keys(rawErrors) as (keyof typeof rawErrors)[]) {
        const messages = rawErrors[key];
        if (messages && messages.length > 0) {
          firstErrors[key] = messages[0];
        }
      }

      return {
        errorMessage: 'Validation failed',
        errors: firstErrors,
        data: data ?? payload,
        success: false,
      };
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return {
        errorMessage: (errorData.message as string) || 'Login failed',
        data: payload,
        success: false,
      };
    }

    await response.json();

    return { success: true };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Login failed';
    return { success: false, message: errorMessage };
  }
};
