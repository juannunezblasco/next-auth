import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '@/app/auth/login/page'
import { SignInForm } from '@/modules/auth/components/sign-in-form/sign-in-form'
 


// Mock the component you want to test if it's rendered
jest.mock('@/modules/auth/components/sign-in-form/sign-in-form', () => {
  return {
    __esModule: true,
    SignInForm: () => {
      return <div>Mocked Component</div>
    },
  }
})

describe('Login page', () => {
  it('renders a heading', () => {
    render(<Login />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  it('renders the SignInForm component', () => {
    render(<Login />)
 
    const signInForm = screen.getByText('Mocked Component')
 
    expect(signInForm).toBeInTheDocument()
  })
  
})