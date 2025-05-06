'use server';

import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { FormActionState } from '../definitions/FormActionState';

// Define schema with Zod
export const SignUpFormSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .nonempty('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .nonempty('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .nonempty('Email is required')
    .email('Invalid format for email'),
  confirmEmail: z
    .string({ required_error: 'Confirm email is required' })
    .nonempty('Confirm email is required')
    .email('Invalid format for confirm email'),
  password: z
    .string({ required_error: 'Password is required' })
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

// Infer the type from the schema
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;

export const signUpAction = async (
  _: FormActionState<SignUpFormData>,
  formData: FormData
): Promise<FormActionState<SignUpFormData>> => {
  try {
    const payload = Object.fromEntries(formData.entries()) as SignUpFormData;
    const { success, data, error } = SignUpFormSchema.safeParse(payload);

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
      `${import.meta.env.VITE_API_BASE_URL}/auth/signup`,
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
        errorMessage: (errorData.message as string) || 'SignUp failed',
        data: payload,
        success: false,
      };
    }

    await response.json();

    return { success: true };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'SignUp failed';
    return { success: false, message: errorMessage };
  }
};
