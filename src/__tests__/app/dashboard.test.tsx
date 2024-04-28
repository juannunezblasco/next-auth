import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Dashboard from '@/app/page'
 
// Mock the component you want to test if it's rendered
jest.mock('@/modules/auth/components/sign-out-form/sign-out-form', () => {
  return {
    __esModule: true,
    SignOutForm: () => {
      return <div>Mocked Component</div>
    },
  }
})

describe('Dashboard page: ', () => {
  it('renders a heading', () => {
    render(<Dashboard />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  it('renders the SignOutForm component', () => {
    render(<Dashboard />)
 
    const signOutForm = screen.getByText('Mocked Component')
 
    expect(signOutForm).toBeInTheDocument()
  })
  
})