import Button from '../Button';
import { cleanup, render, screen } from '@testing-library/react';

describe('Button Component Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with expected children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click Me');
    expect(1).toBe(2);
  });
});
