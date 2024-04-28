'use client'

import { useFormState } from "react-dom";

import { ButtonSubmit } from "@/modules/common/components/molecules/button-submit";
import { signInAction } from "../../actions/sign-in";
import { FalRightToBranket } from "@/assets/icons/fal-right-to branket";

export const SignInForm = () => {

  const [state, formAction] = useFormState(signInAction, undefined); 
  
  return (
    <form 
      id="sign-in-form"
      data-testid="sign-in-form"
      className="flex flex-col gap-4 w-80 max-w-full"
      action={formAction}
    >
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
          <FalRightToBranket className="w-5 h-auto mr-2" />
          Login
        </ButtonSubmit>
      </div>
    </form>
  )
}
