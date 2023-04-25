const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { default: GoohoggerMain } = require('../src/GoohoggerMain.js');

test('goohogger renders main image', () => {
  render(<GoohoggerMain />);

  const mainImage = screen.getByRole('image');
  expect(mainImage).toBeVisible();
});


test('goohogger says fuck you on click', () => {
    render(<GoohoggerMain />)

    const goohoggerImage = screen.getByRole('image');
    const overlayImage = screen.queryByRole('overlayImage', { hidden: true});

    expect(overlayImage).toHaveAttribute('hidden');
    expect(overlayImage).not.toBeVisible();
    
    fireEvent.click(goohoggerImage);
    
    // Content should be visible after the first click
    expect(overlayImage).toBeVisible();
    
    fireEvent.click(goohoggerImage);
    
    // Content should be hidden again after the second click
    expect(overlayImage).not.toBeVisible();
});