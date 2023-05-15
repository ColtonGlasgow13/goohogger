import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { putMonsterData } from 'src/components/API/API.js';
import AbilitiesWidget from 'src/components/Widgets/AbilitiesWidget/AbilitiesWidget';
import 'jest-localstorage-mock';


beforeEach(() => {
    sessionStorage.setItem('idToken', JSON.stringify('mock-token'));
  });

afterEach(() => {
    cleanup();
    sessionStorage.clear();
});
  

jest.mock('src/components/API/API.js', () => ({
  putMonsterData: jest.fn(),
}));

test('AbilitiesWidget should have the correct className', () => {
  const { container } = render(<AbilitiesWidget />);
  const abilitiesWidget = container.querySelector('.abilities-widget');

  expect(abilitiesWidget).toBeInTheDocument();
  expect(abilitiesWidget.className).toBe('abilities-widget');
});

test('Checkboxes correctly reflect state', async () => {
  render(<AbilitiesWidget />);

  const ability1Checkbox = screen.getByLabelText('Ability 1');
  const ability2Checkbox = screen.getByLabelText('Ability 2');
  const ability3Checkbox = screen.getByLabelText('Ability 3');

  // Check initial state
  expect(ability1Checkbox).not.toBeChecked();
  expect(ability2Checkbox).not.toBeChecked();
  expect(ability3Checkbox).not.toBeChecked();

  // Check one checkbox
  await userEvent.click(ability1Checkbox);
  expect(ability1Checkbox).toBeChecked();
  expect(ability2Checkbox).not.toBeChecked();
  expect(ability3Checkbox).not.toBeChecked();

  // Check another checkbox
  await userEvent.click(ability2Checkbox);
  expect(ability1Checkbox).toBeChecked();
  expect(ability2Checkbox).toBeChecked();
  expect(ability3Checkbox).not.toBeChecked();
});

test('Submit button calls putMonsterData function with correct data', async () => {
  render(<AbilitiesWidget />);

  const ability1Checkbox = screen.getByLabelText('Ability 1');
  const ability2Checkbox = screen.getByLabelText('Ability 2');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  // Check a checkbox
  await userEvent.click(ability1Checkbox);
  await userEvent.click(ability2Checkbox);

  // Click the submit button
  await userEvent.click(submitButton);

  // Check if putMonsterData was called with the correct data
  expect(putMonsterData).toHaveBeenCalledWith(
    { abilities: ['ability1', 'ability2'] },
    expect.anything()
  );
});
