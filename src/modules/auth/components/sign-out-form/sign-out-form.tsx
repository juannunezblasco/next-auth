'use server'

import React from 'react'
import { signOutAction } from '../../actions/sign-out';

export const SignOutForm = () => {
  return (
    <form
      id='sign-out-form'
      data-testid='sign-out-form'
      action={async () => {
        'use server';
        await signOutAction();
      }}
    >
      <button className="button button__secondary">
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  )
}
