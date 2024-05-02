import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '.';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const component = render(<Button>Click</Button>);

    expect(component).toMatchSnapshot();
  });

  it('renders the button with the correct text', () => {
    render(<Button onClick={() => {}}>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
});
