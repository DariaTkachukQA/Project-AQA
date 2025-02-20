import { createBdd } from 'playwright-bdd';
import { expect} from "@playwright/test";
import { page } from '@playwright/test';
import { devices } from '@playwright/test';
const { Given, When, Then } = createBdd();
import CheckoutPage from '../pages/mobile/checkoutPage';



Given("the user opens the flight booking website on a mobile device", async ({page}) => {
    await page.goto("https://flights.ovago.hybrid.stage.travel-dev.com/");
  });

When('the user accepts cookies and minimizes the chat window', async ({page}) => {
  await page.locator('div.btn.cookies-convention__btn.js-cookies-ok').click();
  await page.locator('iframe[title="SalesIQ Chatwindow"]').contentFrame()?.getByLabel('Minimize live chat window').click();
});

When('the user searches for a flight with the following details:', async ({page}, Origin, Destination) => {
  await page.locator('#searchform-originlabel-0').fill(Origin);
  await page.getByText(`MIA Miami InternationalUnited`).click();
  await page.locator('#searchform-destinationlabel-0').fill(Destination);
  await page.getByText('LAX Los Angeles').click();
});

When('the user selects the following travel dates:', async ({page}) => {
  await page.locator('#departureDate').click();
  await page.locator('.month2 > tbody > tr:nth-child(3) > td > .day').first().click(); // Select departure date
  await page.locator('.month2 > tbody > tr:nth-child(3) > td:nth-child(5) > .day').click(); // Select return date
  await page.getByRole('button', { name: 'Save' }).click();
});

When('the user chooses the following class:', async ({page}, Class) => {
  await page.getByText(Class).click();
});

When('the user clicks on the search button', async ({page}) => {
    await page.locator("button.search-form__btn.mkt-srch-frm-btn").nth(0).click();
});

When('the user selects a random flight', async ({page}) => {
    const resultsPage = new SearchResultsPage (page);
    await resultsPage.checkIfButtonIsVisible();
    await resultsPage.selectRandomFlight ();
});

When('the user proceeds to checkout', async ({page}) => {
  await page.locator('button#next-step-bnt.btn.checkout-form__btn[type="button"]').click();
});

When('the user continues as a guest', async ({page}) => {
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
});

When('the user fills in the following passenger details:', async ({page},table) => {
  const { "Email": Email, "Phone": Phone, "Address": Address, "ZipCode": ZipCode, "Country": Country, "City": City, "FirstName": FirstName, "LastName": LastName, "Gender": Gender } = table.hashes();

  await page.getByTestId('email-input').fill(Email);
  await page.getByRole('textbox', { name: 'Phone*' }).fill(Phone);
  await page.getByTestId('address-input').fill(Address);
  await page.getByTestId('zipCode-input').fill(ZipCode);
  await page.getByTestId('country-select').click();
  await page.getByTestId('country-select-option-AD').click();
  await page.getByTestId('city-input').fill(City);
  await checkoutPage.fillFieldByPlaceholder('E.g. John', FirstName);
  await checkoutPage.fillFieldByPlaceholder('E.g. Smith', LastName);
  await page.locator('#passenger-0-ps_gender label').nth(Gender === 'Female' ? 2 : 1).click();
});

When('the user fills in the following passport details:', async ({page}, table) => {
  const passengers = table.hashes();
  for (let i = 0; i < passengers.length; i++) {
      const { "First Name": firstName, "Last Name": lastName, "Gender": Gender, Nationality, "Birth Month": birthMonth, "Birth Day": birthDay, "Birth Year": birthYear } = passengers[i];
      await page.getByTestId(`pax${i}FirstName-input`).fill(firstName);
      await page.getByTestId(`pax${i}LastName-input`).fill(lastName);
      if (Gender === 'Female') {
          await page.getByText('Female').nth(i).click();  // Click Female for passenger i
      } else if (Gender === 'Male') {
          await page.getByText('male').nth(i).click();    // Click Male for passenger i
      };
      await page.getByTestId(`pax${i}Nationality-combobox`).click();
      await page.getByTestId(`pax${i}Nationality-option-${Nationality}`).click();
      await page.getByTestId(`pax${i}BirthMonth-combobox`).click();
      await page.getByTestId(`pax${i}BirthMonth-option-${birthMonth}`).click();
      await page.getByTestId(`pax${i}BirthDay-input`).fill(birthDay);
      await page.getByTestId(`pax${i}BirthYear-input`).fill(birthYear);
  }
});

When('the user enters the following payment details:', async ({page}, dataTable) => {
  const { CardNumber, ExpirationDate, CVV, CardholderName } = dataTable.rowsHash();


  await checkoutPage.cardNumberField.fill(CardNumber);
  await checkoutPage.expirationDateField.fill(ExpirationDate);
  await checkoutPage.cvvField.fill(CVV);
  await checkoutPage.cardholderNameField.fill(CardholderName);
});

When('the user submits the payment', async ({page}) => {
  await checkoutPage.submitPaymentButton.click();
});

Then('the user should see the booking confirmation message', async () => {
  await checkoutPage.waitForConfirmation({page});
  await expect(checkoutPage.confirmationMessage).toHaveText('Thanks For Your Booking');
});
