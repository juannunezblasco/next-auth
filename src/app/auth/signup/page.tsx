import { SignUpForm } from '@/modules/auth/components/sign-up-form/sign-up-form'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className='text-4xl font-bold my-8'>SIGNUP</h1> 
      <SignUpForm />
      <p className='my-4'>Already have an account? &nbsp;
      <Link href="/auth/login">Login</Link>
      </p>
    </section>
  )
}

export default Signup