import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Container from './Container';

describe('<Container />', () => {
  it('should match snapshot', () => {
    const component = render(
      <Container>
        <div>Test Content</div>
      </Container>
    );

    expect(component).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
