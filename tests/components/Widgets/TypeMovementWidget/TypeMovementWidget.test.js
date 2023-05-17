import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TypeMovementWidget from 'src/components/Widgets/TypeMovementWidget/TypeMovementWidget';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { putMonsterData } from 'src/components/API/API';

jest.mock('src/components/API/API.js', () => ({
  putMonsterData: jest.fn(),
}));

describe('TypeMovementWidget', () => {
  beforeEach(() => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
    render(<TypeMovementWidget />);
  });

  afterEach(() => {
    cleanup();
    sessionStorage.clear();
  });

  it('renders correctly', () => {
    const typeSelect = screen.getByRole('combobox', { name: '' });
    const speedInput = screen.getByRole('spinbutton');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(typeSelect).toBeInTheDocument();
    expect(speedInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls putMonsterData with the correct arguments when the form is submitted', async () => {
    const typeSelect = screen.getByRole('combobox', { name: '' });
    const speedInput = screen.getByRole('spinbutton');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Change the values of the select and input
    userEvent.selectOptions(typeSelect, ['type1']);
    fireEvent.change(speedInput, { target: { value: 10 } });

    // Click the submit button
    await userEvent.click(submitButton);

    // Check if putMonsterData was called with the correct data
    expect(putMonsterData).toHaveBeenCalledWith(
      { type: 'type1', speed: 10 },
      expect.anything()
    );
  });
});
