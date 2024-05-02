import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb />', () => {
  const items = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { label: 'Current Page' }
  ];

  it('should match snapshot', () => {
    const component = render(
      <Router>
        <Breadcrumb items={items} />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });

  it('renders the correct number of breadcrumb items', () => {
    render(
      <Router>
        <Breadcrumb items={items} />
      </Router>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(screen.getByText('Current Page')).toBeInTheDocument();
  });
});
