import React from 'react';
import { render, screen } from '@testing-library/react';
import DragQueens from './DragQueens';

describe('DragQueens container', () => {
  it.skip('renders a list of drag queens', async () => {
    render(<DragQueens />);
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
