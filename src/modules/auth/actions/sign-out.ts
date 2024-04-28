'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  // Remove the token from the cookie
  cookies().set('accessToken', "", { expires: new Date(0) });

  // Redirect to the login page
  redirect('/auth/login')
};