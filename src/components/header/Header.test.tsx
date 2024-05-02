import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const component = render(
      <Router>
        <Header />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });

  it('renders navigation links and checks their destinations', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });
});
