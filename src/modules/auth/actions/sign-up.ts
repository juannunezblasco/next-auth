'use server'

import { SignupFormState, SignupFormSchema } from "../domain/sign-up-form-schema"
import { setAuthCookie } from "../hooks/use-set-cookie";

 
export const signUpAction = async (state: SignupFormState, formData: FormData) => {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Use the `tomorrow` date in your code
  setAuthCookie({
    token: 'access-token', // This should be the token you get from the server
    expiresAt: tomorrow
  });
}