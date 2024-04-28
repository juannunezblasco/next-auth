'use client'
 
import { useFormState } from 'react-dom'
import { ButtonSubmit } from '@/modules/common/components/molecules/button-submit'
import { FalRightToBranket } from '@/assets/icons/fal-right-to branket'
import { signUpAction } from '../../actions/sign-up'
 
export const SignUpForm = () => {
  const [state, action] = useFormState(signUpAction, undefined)
 
  return (
    <form 
      id="sign-up-form"
      data-testid="sign-up-form"
      action={action}
      className="flex flex-col gap-4 w-80 max-w-full"
    >
      <div className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          name="name"
          placeholder="Name" 
        />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
 
      <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email"
          placeholder="Email" 
        />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
 
      <div className='flex flex-col'>
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password"
          type="password" 
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4 w-full flex justify-center">
        <ButtonSubmit>
          <FalRightToBranket className="w-5 mr-2" />
          {/* { t('acceder') } */}
          Sign Up
        </ButtonSubmit>
      </div>
    </form>
  )
}