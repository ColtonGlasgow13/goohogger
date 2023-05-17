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

  const spellcastingCheckbox = screen.getByLabelText('Spellcasting');
  const areaOfEffectCheckbox = screen.getByLabelText('Area of Effect');
  const hpReductionCheckbox = screen.getByLabelText('HP Reduction');
  const rangedAttacksCheckbox = screen.getByLabelText('Ranged Attacks');
  const reachAttacksCheckbox = screen.getByLabelText('Reach Attacks');
  const rechargeCheckbox = screen.getByLabelText('Recharge');
  const summonsAlliesCheckbox = screen.getByLabelText('Summons Allies');
  const legendaryCheckbox = screen.getByLabelText('Legendary');
  const lairActionsCheckbox = screen.getByLabelText('Lair Actions');
  const reactionsCheckbox = screen.getByLabelText('Reactions');


  // Check initial state
  expect(spellcastingCheckbox).not.toBeChecked();
  expect(areaOfEffectCheckbox).not.toBeChecked();
  expect(hpReductionCheckbox).not.toBeChecked();
  expect(rangedAttacksCheckbox).not.toBeChecked();
  expect(reachAttacksCheckbox).not.toBeChecked();
  expect(rechargeCheckbox).not.toBeChecked();
  expect(summonsAlliesCheckbox).not.toBeChecked();
  expect(legendaryCheckbox).not.toBeChecked();
  expect(lairActionsCheckbox).not.toBeChecked();
  expect(reactionsCheckbox).not.toBeChecked();

  // Check one checkbox
  await userEvent.click(areaOfEffectCheckbox);
  expect(spellcastingCheckbox).not.toBeChecked();
  expect(areaOfEffectCheckbox).toBeChecked();
  expect(hpReductionCheckbox).not.toBeChecked();
  expect(rangedAttacksCheckbox).not.toBeChecked();
  expect(reachAttacksCheckbox).not.toBeChecked();
  expect(rechargeCheckbox).not.toBeChecked();
  expect(summonsAlliesCheckbox).not.toBeChecked();
  expect(legendaryCheckbox).not.toBeChecked();
  expect(lairActionsCheckbox).not.toBeChecked();
  expect(reactionsCheckbox).not.toBeChecked();

  // Check another checkbox
  await userEvent.click(legendaryCheckbox);
  expect(spellcastingCheckbox).not.toBeChecked();
  expect(areaOfEffectCheckbox).toBeChecked();
  expect(hpReductionCheckbox).not.toBeChecked();
  expect(rangedAttacksCheckbox).not.toBeChecked();
  expect(reachAttacksCheckbox).not.toBeChecked();
  expect(rechargeCheckbox).not.toBeChecked();
  expect(summonsAlliesCheckbox).not.toBeChecked();
  expect(legendaryCheckbox).toBeChecked();
  expect(lairActionsCheckbox).not.toBeChecked();
  expect(reactionsCheckbox).not.toBeChecked();

  // Uncheck a checkbox
  await userEvent.click(legendaryCheckbox);
  expect(spellcastingCheckbox).not.toBeChecked();
  expect(areaOfEffectCheckbox).toBeChecked();
  expect(hpReductionCheckbox).not.toBeChecked();
  expect(rangedAttacksCheckbox).not.toBeChecked();
  expect(reachAttacksCheckbox).not.toBeChecked();
  expect(rechargeCheckbox).not.toBeChecked();
  expect(summonsAlliesCheckbox).not.toBeChecked();
  expect(legendaryCheckbox).not.toBeChecked();
  expect(lairActionsCheckbox).not.toBeChecked();
  expect(reactionsCheckbox).not.toBeChecked();
});

test('Submit button calls putMonsterData function with correct data', async () => {
  render(<AbilitiesWidget />);

  const areaOfEffectCheckbox = screen.getByLabelText('Area of Effect');
  const legendaryCheckbox = screen.getByLabelText('Legendary');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  // Check a checkbox
  await userEvent.click(areaOfEffectCheckbox);
  await userEvent.click(legendaryCheckbox);

  // Click the submit button
  await userEvent.click(submitButton);

  // Check if putMonsterData was called with the correct data
  expect(putMonsterData).toHaveBeenCalledWith(
    { abilities: ['areaOfEffect', 'legendary'] },
    expect.anything()
  );
});
