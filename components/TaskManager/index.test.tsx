import React from 'react';
import { render } from '@testing-library/react';
import TaskManager from './';

describe('TaskManager', () => {
  it('renders the TaskManager component', () => {
    const { getByTestId } = render(<TaskManager />);

    expect(getByTestId('addTask')).toBeDefined();
    expect(getByTestId('newTask')).toBeDefined();
  });
});
