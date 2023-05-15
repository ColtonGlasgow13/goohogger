import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import NumberWidget from 'src/components/Widgets/NumberWidget/NumberWidget';
import userEvent from '@testing-library/user-event';
import { putMonsterData } from 'src/components/API/API';

jest.mock('src/components/API/API.js', () => ({
  putMonsterData: jest.fn(),
}));

describe('NumberWidget', () => {
  beforeEach(() => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
    render(<NumberWidget stat1="stat1" stat2="stat2" sumOfStats={10} />);
  });

  afterEach(() => {
    cleanup();
    sessionStorage.clear();
  });

  it('renders correctly', () => {
    const stat1Input = screen.getByRole('spinbutton', { name: 'stat1' });
    const stat2Input = screen.getByRole('spinbutton', { name: 'stat2' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(stat1Input).toBeInTheDocument();
    expect(stat2Input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls putMonsterData with the correct arguments when the form is submitted', async () => {
    const stat1Input = screen.getByRole('spinbutton', { name: 'stat1' });
    const stat2Input = screen.getByRole('spinbutton', { name: 'stat2' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Change the values of the input fields
    fireEvent.change(stat1Input, { target: { value: '6' } });
    fireEvent.change(stat2Input, { target: { value: '4' } });

    // Submit the form
    await userEvent.click(submitButton);

    // Check if putMonsterData was called with the correct data
    expect(putMonsterData).toHaveBeenCalledWith(
      { stat1: 6, stat2: 4 },
      expect.anything()
    );
  });

  it('does not allow submitting when the sum of stats is not equal to sumOfStats', async () => {
    const stat1Input = screen.getByRole('spinbutton', { name: 'stat1' });
    const stat2Input = screen.getByRole('spinbutton', { name: 'stat2' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Change the values of the input fields
    fireEvent.change(stat1Input, { target: { value: '3' } });
    fireEvent.change(stat2Input, { target: { value: '4' } });

    // Check if the submit button is disabled
    expect(submitButton).toBeDisabled();
  });

  it('does not allow the value of either input to exceed sumOfStats', () => {
    const stat1Input = screen.getByRole('spinbutton', { name: 'stat1' });
    const stat2Input = screen.getByRole('spinbutton', { name: 'stat2' });

    // Change the values of the input fields
    fireEvent.change(stat1Input, { target: { value: '15' } });
    // The value of each input should not exceed sumOfStats
    expect(stat1Input.value).toBe('9');

    // Set it back to 1
    fireEvent.change(stat1Input, { target: { value: '1' } });

    fireEvent.change(stat2Input, { target: { value: '15' } });
    expect(stat2Input.value).toBe('9');
});

it('does not allow the value of either input to be less than 1', () => {
    const stat1Input = screen.getByRole('spinbutton', { name: 'stat1' });
    const stat2Input = screen.getByRole('spinbutton', { name: 'stat2' });

    // Change the values of the input fields
    fireEvent.change(stat1Input, { target: { value: '-5' } });
    // The value of each input should not be less than 1
    expect(stat1Input.value).toBe('1');

    fireEvent.change(stat2Input, { target: { value: '-5' } });
    expect(stat2Input.value).toBe('1');
});

});
