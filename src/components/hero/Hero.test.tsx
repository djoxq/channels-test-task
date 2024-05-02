import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from './Hero';

describe('<Hero />', () => {
  it('should match snapshot', () => {
    const component = render(
      <Hero title="Test Page" breadcrumb={[]} />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders the title', () => {
    render(
      <Hero title="Test Page" breadcrumb={[]} />
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Test Page');
  });
});
