import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from './Table';

describe('<Table />', () => {
  const columns = {
    name: { title: "Name", sortable: true },
    age: { title: "Age", sortable: false }
  };
  const data = [{ id: 1, name: "John Doe", age: 30 }, { id: 2, name: "Jane Doe", age: 25 }];
  const actions = ['delete'];

  it('renders data correctly and responds to row click', () => {
    const mockOnRowClick = jest.fn();
    render(<Table deletingId={null} data={data} columns={columns} actions={actions} onRowClick={mockOnRowClick} />);

    const rows = screen.getAllByRole('row');
    fireEvent.click(rows[1]);
    expect(mockOnRowClick).toHaveBeenCalledWith(data[0]);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });
});
