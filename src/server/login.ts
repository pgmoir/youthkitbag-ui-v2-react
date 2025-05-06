'use server';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';

// Define schema with Zod
export const LoginFormSchema = z.object({
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
type LoginFormData = z.infer<typeof LoginFormSchema>;

// Define the action state type
export type LoginActionState = {
  data?: LoginFormData;
  success: boolean;
  errorMessage?: string;
  errors?: Record<string, string>;
  message?: string;
};

// Simulated async server action (like calling an API)
export const loginAction = async (
  _: LoginActionState,
  formData: FormData
): Promise<LoginActionState> => {
  try {
    const payload = Object.fromEntries(formData.entries()) as LoginFormData;
    const { success, data, error } = LoginFormSchema.safeParse(payload);

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
