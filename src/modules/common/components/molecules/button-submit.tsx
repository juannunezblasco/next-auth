'use client'

import React from 'react';
import { useFormStatus } from 'react-dom';
import { ButtonSpinner } from '../atoms/button-spinner';

export const ButtonSubmit = ({ children }: { children: React.ReactNode }) => {

  const { 
    pending,
    data
   } = useFormStatus();

  return (
    <button 
    type="submit" 
    className="button button__secondary" 
    disabled={pending}
  >
    {
    pending 
      ? <ButtonSpinner />
      : children
    }
  </button>
  )
}
