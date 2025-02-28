import { createBdd } from 'playwright-bdd';
import { expect} from "@playwright/test";
import { page } from '@playwright/test';
const { Given, When, Then } = createBdd();
import HomePage from '../pages/mobile/homePage';
import SearchResultsPage from '../pages/mobile/searchResultsPage';
import CheckoutPage from '../pages/mobile/checkoutPage'

let homePage, searchResultsPage, checkoutPage;

// Given('the user opens the flight booking website on a mobile device', async ({ page }) => {
//     homePage = new HomePage(page);  // Ensure homePage is initialized once
//     await homePage.navigatePage();
// });

// // When('the user accepts cookies', async () => {
// //     await homePage.acceptCookies();
// // });

// When('the user minimizes the chat window', async () => {
//     await homePage.minimizeChatWindow();
// });

// When('the user selects origin {string} and destination {string}', async ({page}, origin, destination ) => {
//     await homePage.selectOrigin(origin);
//     await homePage.selectDestination(destination);
// });



// When('the user selects departure date {string} and return date {string}', async ({page}, depart, returnDate ) => {
//     await homePage.selectDates(depart, returnDate);
// });


// When('the user selects the following travel dates:', async ({page}) => {
//     const departure = { row: 3, column: 1 };
//     const returnDate = { row: 3, column: 5 };
//     await homePage.selectDates(departure, returnDate);
// });

// When('the user chooses the following class:', async ({page}, dataTable) => {
//     const { Class } = dataTable.rowsHash();
//     await homePage.chooseFlightClass(Class);
// });

// When('the user clicks on the search button', async ({page}) => {
//     await homePage.searchFlights();
// });

// When('the user selects a random flight', async ({page}) => {
//     await searchResultsPage.selectRandomFlight();
// });

// When('the user proceeds to checkout', async ({page}) => {
//     await checkoutPage.proceedToCheckout();
// });

// When('the user continues as a guest', async ({page}) => {
//     await checkoutPage.continueAsGuest();
// });

// When('the user fills in the following passenger details:', async ({page}, table) => {
//     const passengerDetails = table.hashes();
//     await checkoutPage.fillPassengerDetails(passengerDetails);
// });

// When('the user fills in the following passport details:', async ({page}, table) => {
//     const passportDetails = table.hashes();
//     await checkoutPage.fillPassportDetails(passportDetails);
// });

// When('the user enters the following payment details:', async ({ page }, dataTable) => {
//     const paymentDetails = dataTable.rowsHash();
//     await checkoutPage.enterPaymentDetails(paymentDetails);
// });

// When('the user submits the payment', async ({ page }) => {
//     await checkoutPage.submitPayment();
// });

// Then('the user should see the booking confirmation message', async ({ page }) => {
//     await checkoutPage.waitForConfirmation();
//     await expect(checkoutPage.confirmationMessage).toHaveText('Thanks For Your Booking');
// });


// Given('the user opens the flight booking website on a mobile device', async ({ page }) => {
//     const homePage = new HomePage (page);
//     await homePage.navigatePage();
// });
// When('the user accepts cookies', async ({page}) => {
//     await homePage.acceptCookies({page});
// });
// When('the user minimizes the chat window', async ({page}) => {
//     await homePage.minimizeChatWindow();
// });
// When('the user selects origin {string} and destination {string}', async ({ page }, origin, destination) => {
//     await homePage.selectOrigin(origin);
//     await homePage.selectDestination(destination);
// });

// When('the user selects departure date {string} and return date {string}', async ({ page }, depart, returnDate) => {
//     const homePage = new HomePage(page);
//     await homePage.selectDates(depart, returnDate);
// });
// Given('the user opens the flight booking website on a mobile device', async ({ page }) => {
//     homePage = new HomePage(page);
//     searchResultsPage = new SearchResultsPage(page);
//     checkoutPage = new CheckoutPage(page);

//     await homePage.navigate();
// });

// When('the user accepts cookies', async () => {
//     await homePage.acceptCookies();
// });

// When('the user minimizes the chat window', async () => {
//     await homePage.minimizeChatWindow();
// });

// When('the user searches for a flight with the following details:', async ({}, dataTable) => {
//     const flightDetails = dataTable.rowsHash();
//     const origin = flightDetails['Origin'];  // 'MIA'
//     const destination = flightDetails['Destination'];  // 'LAX'
//     await homePage.searchOrigin(origin);
//     await homePage.searchDestination(destination);
// });

// When('the user selects the following travel dates:', async () => {
//     const departure = { row: 3, column: 1 };  // Adjust based on real selectors
//     const returnDate = { row: 3, column: 5 }; // Adjust based on real selectors
//     await homePage.selectDates(departure, returnDate);
// });

// When('the user chooses the following class:', async ({}, dataTable) => {
//     const { Class } = dataTable.rowsHash();
//     await homePage.chooseFlightClass(Class);
// });

// When('the user clicks on the search button', async () => {
//     await homePage.searchFlights();
// });

// When('the user selects a random flight', async () => {
//     await searchResultsPage.checkIfButtonIsVisible();
//     await searchResultsPage.selectRandomFlight();
// });

// When('the user proceeds to checkout', async () => {
//     await checkoutPage.proceedToCheckout();
// });

// When('the user continues as a guest', async () => {
//     await checkoutPage.continueAsGuest();
// });

// When('the user fills in the following passenger details:', async ({}, table) => {
//     const passengers = table.hashes();
//     await checkoutPage.fillPassengerDetails(passengers);
// });

// When('the user fills in the following passport details:', async ({}, table) => {
//     const passengers = table.hashes();
//     await checkoutPage.fillPassengerDetails(passengers);
// });

// When('the user enters the following payment details:', async ({}, dataTable) => {
//     const paymentDetails = dataTable.rowsHash();
//     await checkoutPage.enterPaymentDetails(paymentDetails);
// });

// When('the user submits the payment', async () => {
//     await checkoutPage.submitPayment();
// });

// Then('the user should see the booking confirmation message', async () => {
//     await checkoutPage.waitForConfirmation();
//     await expect(checkoutPage.confirmationMessage).toHaveText('Thanks For Your Booking');
// });


// Given("the user opens the flight booking website", async ({page}) => {
//     await page.goto("https://flights.ovago.hybrid.stage.travel-dev.com/");
//   });

// When('the user accepts cookies', async ({page}) => {
//   await page.locator('div.btn.cookies-convention__btn.js-cookies-ok').click();
// });

// When('the user searches for a flight with the following details:', async ({ page }, dataTable) => {
//   const flightDetails = dataTable.rowsHash(); // Отримуємо значення у вигляді об'єкта
//   const { Origin, Destination } = flightDetails;

//   await page.locator('#searchform-originlabel-0').fill(Origin);
//   await page.getByText(`MIA Miami InternationalUnited`).click();
//   await page.locator('#searchform-destinationlabel-0').fill(Destination);
//   await page.getByText('LAX Los Angeles').click();
// });


// When('the user minimizes the chat window', async ({page}) => {
//   await page.locator('iframe[title="SalesIQ Chatwindow"]').contentFrame()?.getByLabel('Minimize live chat window').click({timeout:50000});
// });
// When('the user selects the following travel dates:', async ({page}) => {
//   await page.locator('#departureDate').click();
//   await page.locator('.month2 > tbody > tr:nth-child(3) > td > .day').first().click(); // Select departure date
//   await page.locator('.month2 > tbody > tr:nth-child(3) > td:nth-child(5) > .day').click(); // Select return date
//   await page.getByRole('button', { name: 'Save' }).click();
// });

// When('the user chooses the following class:', async ({page}, Class) => {
//   await page.getByText(Class).click();
// });

// When('the user clicks on the search button', async ({page}) => {
//     await page.locator("button.search-form__btn.mkt-srch-frm-btn").nth(0).click();
// });

// When('the user selects a random flight', async ({page}) => {
//     const resultsPage = new SearchResultsPage (page);
//     await resultsPage.checkIfButtonIsVisible();
//     await resultsPage.selectRandomFlight ();
// });

// When('the user proceeds to checkout', async ({page}) => {
//   await page.locator('button#next-step-bnt.btn.checkout-form__btn[type="button"]').click();
// });

// When('the user continues as a guest', async ({page}) => {
//   await page.getByRole('button', { name: 'Continue as Guest' }).click();
// });

// When('the user fills in the following passenger details:', async ({page},table) => {
//   const { "Email": Email, "Phone": Phone, "Address": Address, "ZipCode": ZipCode, "Country": Country, "City": City, "FirstName": FirstName, "LastName": LastName, "Gender": Gender } = table.hashes();

//   await page.getByTestId('email-input').fill(Email);
//   await page.getByRole('textbox', { name: 'Phone*' }).fill(Phone);
//   await page.getByTestId('address-input').fill(Address);
//   await page.getByTestId('zipCode-input').fill(ZipCode);
//   await page.getByTestId('country-select').click();
//   await page.getByTestId('country-select-option-AD').click();
//   await page.getByTestId('city-input').fill(City);
//   await checkoutPage.fillFieldByPlaceholder('E.g. John', FirstName);
//   await checkoutPage.fillFieldByPlaceholder('E.g. Smith', LastName);
//   await page.locator('#passenger-0-ps_gender label').nth(Gender === 'Female' ? 2 : 1).click();
// });

// When('the user fills in the following passport details:', async ({page}, table) => {
//   const passengers = table.hashes();
//   for (let i = 0; i < passengers.length; i++) {
//       const { "First Name": firstName, "Last Name": lastName, "Gender": Gender, Nationality, "Birth Month": birthMonth, "Birth Day": birthDay, "Birth Year": birthYear } = passengers[i];
//       await page.getByTestId(`pax${i}FirstName-input`).fill(firstName);
//       await page.getByTestId(`pax${i}LastName-input`).fill(lastName);
//       if (Gender === 'Female') {
//           await page.getByText('Female').nth(i).click();  // Click Female for passenger i
//       } else if (Gender === 'Male') {
//           await page.getByText('male').nth(i).click();    // Click Male for passenger i
//       };
//       await page.getByTestId(`pax${i}Nationality-combobox`).click();
//       await page.getByTestId(`pax${i}Nationality-option-${Nationality}`).click();
//       await page.getByTestId(`pax${i}BirthMonth-combobox`).click();
//       await page.getByTestId(`pax${i}BirthMonth-option-${birthMonth}`).click();
//       await page.getByTestId(`pax${i}BirthDay-input`).fill(birthDay);
//       await page.getByTestId(`pax${i}BirthYear-input`).fill(birthYear);
//   }
// });

// When('the user enters the following payment details:', async ({page}, dataTable) => {
//   const { CardNumber, ExpirationDate, CVV, CardholderName } = dataTable.rowsHash();


//   await checkoutPage.cardNumberField.fill(CardNumber);
//   await checkoutPage.expirationDateField.fill(ExpirationDate);
//   await checkoutPage.cvvField.fill(CVV);
//   await checkoutPage.cardholderNameField.fill(CardholderName);
// });

// When('the user submits the payment', async ({page}) => {
//   await checkoutPage.submitPaymentButton.click();
// });

// Then('the user should see the booking confirmation message', async () => {
//   await checkoutPage.waitForConfirmation({page});
//   await expect(checkoutPage.confirmationMessage).toHaveText('Thanks For Your Booking');
// });



Given('the user opens the flight booking website', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigatePage();
});

When('the user accepts cookies', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.acceptCookies();
});

When('the user minimizes the chat window', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.minimizeChatWindow();
});

When('the user searches for flights from {string} to {string}', async ({ page },origin, destination) => {
    homePage = new HomePage(page);
    await homePage.searchOrigin(origin);
    await homePage.searchDestination(destination);
});

// When('the user selects the following travel dates:', async ({ page }, dataTable) => {
//     homePage = new HomePage(page); // ✅ Initialize homePage

//     const flightDates = dataTable.rowsHash();  // ✅ Extract values from table
//     const departureDate = flightDates['Departure'];
//     const returnDate = flightDates['Return'];

//     await homePage.selectDates(departureDate, returnDate);
// });
await page.getByText('Easy way to book flight ticketInstall').check();
await page.locator('span').filter({ hasText: 'Economy' }).click();
await page.getByText('Premium Economy').click();


When('the user selects {string} class', async ({ page },flightClass) => {
    homePage = new HomePage(page);
    await homePage.chooseFlightClass(flightClass);
});

When('the user clicks on the search button', async ({ page }) => {
    await homePage.searchFlights();
});

When('the user selects a flight', async ({ page }) => {
    // Add logic for selecting a flight if necessary
    await homePage.selectRandomFlight();
});

When('the user proceeds to checkout as a guest', async ({ page }) => {
    checkoutPage = new CheckoutPage(homePage.page);
    await checkoutPage.continueAsGuest();
});

When('the user fills in passenger details', async ({ page }) => {
    const passengerDetails = {
        email: 'test@example.com',
        phone: '1234567890',
        address: '123 Street',
        city: 'City',
        country: 'Country',
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
    };
    await checkoutPage.fillPassengerDetails(passengerDetails);
});

When('the user enters passport details', async ({ page }) => {
    const passportDetails = {
        nationality: 'Country',
        birthMonth: '01',
        birthDay: '01',
        birthYear: '1990',
    };
    await checkoutPage.fillPassportDetails(passportDetails);
});

When('the user enters payment information', async ({ page }) => {
    const paymentDetails = {
        cardNumber: '4111111111111111',
        expirationDate: '12/29',
        cvv: '123',
        cardholderName: 'John Doe',
    };
    await checkoutPage.enterPaymentDetails(paymentDetails);
});

When('the user submits the payment', async ({ page }) => {
    await checkoutPage.submitPayment();
});

Then('the user should see a booking confirmation', async ({ page }) => {
    await checkoutPage.waitForConfirmation();
    await expect(checkoutPage.confirmationMessage).toHaveText('Thanks for your booking');
});
