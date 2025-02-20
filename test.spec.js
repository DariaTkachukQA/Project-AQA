import { test, expect } from '@playwright/test';
import { SearchResultsPage } from "/Users/tkachukdaria/Desktop/ProjectAQA/tests/pages/SearchResultsPage.ts";

test('Flight booking test', async ({ page }) => {
  const resultsPage = new SearchResultsPage(page); // Правильне створення об'єкта

  await page.goto('https://flights.ovago.hybrid.stage.travel-dev.com/');

  
  // Select origin and destination
  await page.locator('#searchform-originlabel-0').fill('Mia');
  await page.locator('#searchform-originlabel-0').click();
  await page.getByText('MIA Miami InternationalUnited').click();
  await page.locator('#searchform-destinationlabel-0').fill('Lax');
  await page.getByText('LAX Los Angeles').click();
  
  // Select travel dates
  await page.locator('#departureDate').click();
  await page.getByRole('row', { name: 'March' }).locator('i').click();
  await page.getByRole('row', { name: 'April' }).locator('i').click();
  await page.getByText('20', { exact: true }).first().click();
  await page.getByText('25', { exact: true }).first().click();
  
  // Set traveler details
  await page.getByText('1 traveler').click();
  await page.locator('#adults').getByRole('button', { name: '+' }).click();
  await page.getByRole('link', { name: 'Done' }).click();
  
  // Choose flight class
  await page.locator('span').filter({ hasText: 'Economy' }).click();
  await page.getByText('Premium Economy').click();

  // Search for flights
  await page.locator('button.search-form__btn.mkt-srch-frm-btn').nth(0).click();
  await resultsPage.checkIfButtonIsVisible();
  await resultsPage.selectRandomFlight();
  
  // Fill in passenger details
  await page.getByTestId('email-input').fill('dari.terri@kiv.dev');
  await page.getByRole('textbox', { name: 'Phone*' }).fill('19074861280');
  await page.getByTestId('address-input').fill('Chkalova');
  await page.getByTestId('zipCode-input').fill('12345');
  await page.getByTestId('country-select').click();
  await page.getByTestId('country-select-option-AD').click();
  await page.getByTestId('city-input').fill('Arans');
  
  // Passenger 1
  await page.getByTestId('pax0FirstName-input').fill('Dari');
  await page.getByTestId('pax0LastName-input').fill('Terri');
  await page.getByText('Female').first().click();
  await page.getByTestId('pax0Nationality-combobox').click();
  await page.getByTestId('pax0Nationality-option-US').click();
  await page.getByTestId('pax0BirthMonth-combobox').click();
  await page.getByTestId('pax0BirthMonth-option-6').click();
  await page.getByTestId('pax0BirthDay-input').fill('12');
  await page.getByTestId('pax0BirthYear-input').fill('1990');
  
  // Passenger 2
  await page.getByTestId('pax1FirstName-input').fill('Andrew');
  await page.getByTestId('pax1LastName-input').fill('Smith');
  await page.getByText('Female').last().click();
  
  //await page.locator('input[name="pax1Gender"][data-testid="form-field.gender-male"]').click();
  await page.getByTestId('pax1Nationality-combobox').click();
  await page.getByTestId('pax1Nationality-option-US').click();
  await page.getByTestId('pax1BirthMonth-combobox').click();
  await page.getByTestId('pax1BirthMonth-option-8').click();
  await page.getByTestId('pax1BirthDay-input').fill('12');
  await page.getByTestId('pax1BirthYear-input').fill('1990');
  
  // Continue booking
  await page.getByTestId('pax_Continue').click();
  await page.getByTestId('services_Continue').click();
  
  // Payment details
  await page.getByTestId('cc_number-input').fill('4716640240196444');
  await page.getByTestId('cc_cardholder_name-input').fill('Barbara Elmore T');
  await page.getByTestId('cc_month-input').fill('12');
  await page.getByTestId('cc_year-input').fill('29');
  await page.getByTestId('cc_cvv-input').fill('123');
  
  // // Accept terms and book


await page.locator('span').filter({ hasText: 'Confirming Your Booking' }).scrollIntoViewIfNeeded();
  await page.locator('input[type="checkbox"]').nth(0).waitFor(); // Ensure it's ready
  await page.locator('input[type="checkbox"]').nth(0).check({ force: true }); // Force check to bypass overlays
  await page.getByTestId('Book_Now').click();

  // await expect(page.getByText('We are processing your booking')).toBeVisible({ timeout: 10000 });

// Step 2: Wait for the processing modal to disappear
await page.waitForTimeout(5000); // Small pause
const modalExists = await page.locator('text=We are processing your booking').count();
console.log('Modal count after waiting:', modalExists);
await expect(page.locator('text=We are processing your booking')).toHaveCSS('display', 'block', { timeout: 60000 });



// Ensure success message is visible
await page.waitForTimeout(10000);
await expect(page.locator('.booker-details')).toBeVisible();


});