import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Signup from '@/app/auth/signup/page'

// Mock the component you want to test if it's rendered
jest.mock('@/modules/auth/components/sign-up-form/sign-up-form', () => {
  return {
    __esModule: true,
    SignUpForm: () => {
      return <div>Mocked Component</div>
    },
  }
})

describe('Signup page:', () => {
  it('renders a heading', () => {
    render(<Signup />)

    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  it('renders the SignUpForm component', () => {
    render(<Signup />)

    const signUpForm = screen.getByText('Mocked Component')

    expect(signUpForm).toBeInTheDocument()
  })

})