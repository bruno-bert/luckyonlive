import { render, screen } from '@testing-library/react'

import Card from '.'

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = render(<Card description="test"/>)

    expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
