'use server'

import { encrypt } from '@/middlewares/auth/token';
import { cookies } from 'next/headers';
import { redirect} from 'next/navigation';

export const setAuthCookie = async (state: { token: string, expiresAt: Date }) => {

  const encryptedToken = await encrypt( {
    ...state
  }, state.expiresAt )

  cookies().set({
    name: 'accessToken',
    value: encryptedToken,
    expires: state.expiresAt,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  redirect('/')

}
