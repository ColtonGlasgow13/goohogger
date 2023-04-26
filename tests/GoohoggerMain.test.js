const React = require('react');
const { render, screen } = require('@testing-library/react');
const { default: GoohoggerMain } = require('../src/components/GoohoggerMain/GoohoggerMain');
import userEvent from '@testing-library/user-event';

test('goohogger renders main image', () => {
  render(<GoohoggerMain />);

  const mainImage = screen.getByRole('image');
  expect(mainImage).toBeVisible();
});


test('goohogger says fuck you on click', async() => {
    render(<GoohoggerMain />)

    const goohoggerImage = screen.getByRole('image');
    const overlayImage = screen.queryByRole('overlayImage', { hidden: true});

    expect(overlayImage).toHaveAttribute('hidden');
    expect(overlayImage).not.toBeVisible();
    
    await userEvent.click(goohoggerImage);
    
    // Content should be visible after the first click
    expect(overlayImage).toBeVisible();
    
    await userEvent.click(goohoggerImage);
    
    // Content should be hidden again after the second click
    expect(overlayImage).not.toBeVisible();
});