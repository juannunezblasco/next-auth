import { SignInForm } from '@/modules/auth/components/sign-in-form/sign-in-form'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-4xl font-bold my-8'>LOGIN</h1> 
      <SignInForm />
      <p className='my-4'>Don&apos;t have an account? &nbsp; 
        <Link href="/auth/signup">SignUp</Link>
      </p>
    </div>
  )
}

export default Login