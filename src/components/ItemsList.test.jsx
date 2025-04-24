import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ItemsList from './ItemsList';

describe('ItemsList', () => {
  test('renders empty message when no tasks', () => {
    render(<ItemsList itemsList={[]} />);
    expect(screen.getByText('Empty list')).toBeInTheDocument();
  });

  test('renders list of tasks', () => {
    const tasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'in-progress' }
    ];

    render(<ItemsList itemsList={tasks} />);
    
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });
});
