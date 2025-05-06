export type FormActionState<T> = {
  data?: T;
  success: boolean;
  errorMessage?: string;
  errors?: Record<string, string>;
  message?: string;
};
