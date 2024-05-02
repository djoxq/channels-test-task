import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const mockOnChange = jest.fn();

    const component = render(<Input value="test" onChange={mockOnChange} placeholder="Enter text" />);

    expect(component).toMatchSnapshot();
  });

  it('renders the input with the correct placeholder and value', () => {
    const mockOnChange = jest.fn();
    render(<Input value="test" onChange={mockOnChange} placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect((inputElement as any).value).toBe('test');
  });
});
