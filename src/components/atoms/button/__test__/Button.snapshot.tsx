import Button from '../Button';
import { cleanup, render } from '@testing-library/react';

describe('Button Snapshot Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot', () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });
});
