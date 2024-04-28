'use server '

import { SigninFormSchema, SigninFormState } from "../domain/sign-in-form-schema";
import { setAuthCookie } from "../hooks/use-set-cookie";

export const signInAction = async (state: SigninFormState, formData: FormData) => {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Call the provider or db to signin a user...

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Use the `tomorrow` date in your code
  setAuthCookie({
    token: 'access-token', // This should be the token you get from the server
    expiresAt: tomorrow
  });

}