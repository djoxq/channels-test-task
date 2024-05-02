import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PaperCard from './PaperCard';

describe('<PaperCard />', () => {
  it('renders the children content', () => {
    render(
      <PaperCard>
        <div>Test Content</div>
      </PaperCard>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
