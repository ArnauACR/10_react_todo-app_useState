import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ItemCard from './ItemCard';

describe('ItemCard', () => {
  test('renders task title and description', () => {
    const item = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      status: 'pending'
    };

    render(<ItemCard item={item} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('PENDING')).toBeInTheDocument();
  });

  test('renders correct status text based on status', () => {
    const doneItem = {
      id: 1,
      title: 'Done Task',
      description: 'Test Description',
      status: 'done'
    };

    const { rerender } = render(<ItemCard item={doneItem} />);
    expect(screen.getByText('DONE')).toBeInTheDocument();

    const inProgressItem = {
      ...doneItem,
      status: 'in progress'
    };
    rerender(<ItemCard item={inProgressItem} />);
    expect(screen.getByText('IN PROGRESS')).toBeInTheDocument();

    const pendingItem = {
      ...doneItem,
      status: 'pending'
    };
    rerender(<ItemCard item={pendingItem} />);
    expect(screen.getByText('PENDING')).toBeInTheDocument();
  });
});
