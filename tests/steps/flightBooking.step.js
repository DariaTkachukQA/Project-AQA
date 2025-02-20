import { createBdd } from 'playwright-bdd';

import { expect} from "@playwright/test";
import { page } from '@playwright/test';
const { Given, When, Then } = createBdd();
import SearchResultsPage from '../pages/desktop/searchResultsPage';
import HomePage from '../pages/desktop/searchResultsPage';
import CheckoutPage from '../pages/desktop/CheckoutPage';

Given('The user opens Home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
});

When('The user selects origin {string} and destination {string}', async ({ page }, origin, destination) => {
    const homePage = new HomePage(page);
    await homePage.selectOrigin(origin);
    await homePage.selectDestination(destination);
});

When('The user selects departure date {string} and return date {string}', async ({ page }, depart, returnDate) => {
    const homePage = new HomePage(page);
    await homePage.selectDates(depart, returnDate);
});

When('The user sets travelers number to {string}', async ({ page }, travelers) => {
    const homePage = new HomePage(page);
    await homePage.setTravelers(travelers);
});

When('The user chooses flight class {string}', async ({ page }, flightClass) => {
    const homePage = new HomePage(page);
    await homePage.chooseFlightClass(flightClass);
});

When('The user makes search for available flights', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.searchFlights();
});

When('The user selects a random flight and proceed to booking', async ({ page }) => {
    const searchResultsPage = new SearchResultsPage(page);
    await searchResultsPage.checkIfButtonIsVisible();
    await searchResultsPage.selectRandomFlight();
});

When('The user fills Contact Billing details', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillContactBillingDetails({
        email: 'dari.terri@kiv.dev',
        phone: '19074861280',
        address: 'Chkalova',
        zipCode: '12345',
        countryCode: 'AD',
        city: 'Arans'
    });
});

When('The user enters passenger details', async ({ page }, table) => {
    const checkoutPage = new CheckoutPage(page);
    const passengers = table.hashes().map(row => ({
        firstName: row["First Name"],
        lastName: row["Last Name"],
        gender: row["Gender"],
        nationality: row["Nationality"],
        birthMonth: row["Birth Month"],
        birthDay: row["Birth Day"],
        birthYear: row["Birth Year"]
    }));
    await checkoutPage.fillPassengerDetails(passengers);
});

When('The user clicks the continue button', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await page.getByTestId('pax_Continue').click();
    await page.getByTestId('services_Continue').click();
});

When('The user enters payment details', async ({ page }, table) => {
    const checkoutPage = new CheckoutPage(page);
    const payments = table.hashes();

    for (const { "Card Number": cardNumber, "Name": name, "Month": month, "Year": year, "CVV": cvv } of payments) {
        await checkoutPage.enterPaymentDetails({
            cardNumber,
            name,
            month,
            year,
            cvv
        });
    }
});

When('The user accepts the terms and confirm the booking', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.confirmBooking();
});

Then('The user should see the confirmation message {string}', async ({ page }, message) => {
    await expect(page.locator(`text=${message}`)).toBeVisible({ timeout: 10000 });
});

Then('The user should see the success message with booking details', async ({ page }) => {
    await page.waitForTimeout(10000);
    await expect(page.locator(".booker-details")).toBeVisible();
});


// Given('I am on the flight booking website', async ({page}) => {
//     await page.goto("https://flights.ovago.hybrid.stage.travel-dev.com/");
// });

// When('I select origin {string} and destination {string}', async ({page}, origin, destination) => {
//     await page.locator("#searchform-originlabel-0").fill(origin);
//     await page.locator("#searchform-originlabel-0").click();
//     await page.getByText('MIA Miami International').click();
//     await page.locator("#searchform-destinationlabel-0").fill(destination);
//     await page.locator("#searchform-destinationlabel-0").click();
//     await page.getByText('LAX Los Angeles').click();

// });

// When('I select departure date {string} and return date {string}', async ({page}, depart, returnDate) => {
//     await page.locator('#departureDate').click();
//     await page.getByRole('row', { name: 'March' }).locator('i').click();
//     await page.getByRole('row', { name: 'April' }).locator('i').click();
//     await page.getByText('20', { exact: true }).first().click();
//     await page.getByText('25', { exact: true }).first().click();
// });

// When('I set traveler details to {string}', async ({page}, travelers) => {
//     const [numAdults] = travelers.split(" ");
//     await page.getByText("1 traveler").click();
//     for (let i = 1; i < parseInt(numAdults); i++) {
//         await page.locator("#adults").getByRole("button", { name: "+" }).click();
//     }
//     await page.getByRole("link", { name: "Done" }).click();
//     // await page.getByText('1 traveler').click();
//     // await page.locator('#adults').getByRole('button', { name: '+' }).click();
//     // await page.getByRole('link', { name: 'Done' }).click();
// });

// When('I choose flight class {string}', async ({page}, flightClass) => {
//     await page.locator("span").filter({ hasText: "Economy" }).click();
//     await page.getByText(flightClass).click();
    
// });

// When('I search for available flights', async ({page}) => {
//     await page.locator("button.search-form__btn.mkt-srch-frm-btn").nth(0).click();
// });

// When('I select a random flight and proceed to booking', async ({page}) => {
//     const resultsPage = new SearchResultsPage (page);
//     await resultsPage.checkIfButtonIsVisible();
//     await resultsPage.selectRandomFlight ();
// });
// When('I fill in passenger details form', async ({page}) => {
//     await page.getByTestId('email-input').fill('dari.terri@kiv.dev');
//     await page.getByRole('textbox', { name: 'Phone*' }).fill('19074861280');
//     await page.getByTestId('address-input').fill('Chkalova');
//     await page.getByTestId('zipCode-input').fill('12345');
//     await page.getByTestId('country-select').click();
//     await page.getByTestId('country-select-option-AD').click();
//     await page.getByTestId('city-input').fill('Arans');
// });

// When('I enter passenger details', async ({page}, table) => {
//     const passengers = table.hashes();
//     for (let i = 0; i < passengers.length; i++) {
//         const { "First Name": firstName, "Last Name": lastName, "Gender": Gender, Nationality, "Birth Month": birthMonth, "Birth Day": birthDay, "Birth Year": birthYear } = passengers[i];
//         await page.getByTestId(`pax${i}FirstName-input`).fill(firstName);
//         await page.getByTestId(`pax${i}LastName-input`).fill(lastName);
//         if (Gender === 'Female') {
//             await page.getByText('Female').nth(i).click();  // Click Female for passenger i
//         } else if (Gender === 'Male') {
//             await page.getByText('male').nth(i).click();    // Click Male for passenger i
//         };
//         await page.getByTestId(`pax${i}Nationality-combobox`).click();
//         await page.getByTestId(`pax${i}Nationality-option-${Nationality}`).click();
//         await page.getByTestId(`pax${i}BirthMonth-combobox`).click();
//         await page.getByTestId(`pax${i}BirthMonth-option-${birthMonth}`).click();
//         await page.getByTestId(`pax${i}BirthDay-input`).fill(birthDay);
//         await page.getByTestId(`pax${i}BirthYear-input`).fill(birthYear);
//     }
// });

// When ('Click continue button', async ({page}, ) => {
//     await page.getByTestId('pax_Continue').click();
//     await page.getByTestId('services_Continue').click();
// });

// When('I enter payment details', async ({ page }, table) => {
//     const payments = table.hashes(); // Convert DataTable to an array of objects

//     for (const { "Card Number": cardNumber, "Name": name, "Month": month, "Year": year, "CVV": cvv } of payments) {
//         await page.getByTestId("cc_number-input").fill(cardNumber);
//         await page.getByTestId("cc_cardholder_name-input").fill(name);
//         await page.getByTestId("cc_month-input").fill(month);
//         await page.getByTestId("cc_year-input").fill(year);
//         await page.getByTestId("cc_cvv-input").fill(cvv);
//     }
// });



// When('I accept the terms and confirm the booking', async ({page}) => {
//     await page.locator('span').filter({ hasText: 'Confirming Your Booking' }).scrollIntoViewIfNeeded();
//     await page.locator('input[type="checkbox"]').nth(0).waitFor(); // Ensure it's ready
//     await page.locator('input[type="checkbox"]').nth(0).check({ force: true }); // Force check to bypass overlays
//     await page.getByTestId('Book_Now').click();
// });

// Then('I should see the confirmation message {string}', async ({page},message) => {
//     await expect(page.locator(`text=${message}`)).toBeVisible({ timeout: 10000 });
// });

// Then('I should see the success message with booking details', async ({page}) => {
//     await page.waitForTimeout(10000);
//     await expect(page.locator(".booker-details")).toBeVisible();
//     await browser.close();
// });
