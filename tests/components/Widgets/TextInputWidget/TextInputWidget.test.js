import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TextInputWidget from 'src/components/Widgets/TextInputWidget/TextInputWidget';
import userEvent from '@testing-library/user-event';
import { putMonsterData } from 'src/components/API/API';

jest.mock('src/components/API/API.js', () => ({
  putMonsterData: jest.fn(),
}));

describe('TextInputWidget', () => {
  beforeEach(() => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
    render(<TextInputWidget />);
  });

  afterEach(() => {
    cleanup();
    sessionStorage.clear();
  });

  it('renders correctly', () => {
    const textInput = screen.getByPlaceholderText('Enter text here');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(textInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls putMonsterData with the correct arguments when the form is submitted', async () => {
    const textInput = screen.getByPlaceholderText('Enter text here');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Change the value of the text input
    fireEvent.change(textInput, { target: { value: 'Monster Name' } });

    // Submit the form
    await userEvent.click(submitButton);

    // Check if putMonsterData was called with the correct data
    expect(putMonsterData).toHaveBeenCalledWith(
      { name: 'Monster Name' },
      expect.anything()
    );
  });
});
