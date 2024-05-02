import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Listing from './Listing';

describe('<Listing />', () => {
  const props = {
    name: "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    country: "United Arab Emirates",
    code: "AE",
    website: "https://mbzuai.ac.ae/"
  };

  it('should match snapshot', () => {
    const component = render(<Listing {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('renders the listing with all props', () => {
    render(<Listing {...props} />);

    expect(screen.getByRole('heading', { name: props.name })).toBeInTheDocument();
    expect(screen.getByText(`Country: ${props.country}`)).toBeInTheDocument();
    expect(screen.getByText(`Code: ${props.code}`)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Visit Website' });
    expect(link).toHaveAttribute('href', props.website);
  });
});
