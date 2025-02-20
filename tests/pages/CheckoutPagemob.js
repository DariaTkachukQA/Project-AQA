
export default class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.nextStepButton = page.locator('button#next-step-bnt.btn.checkout-form__btn[type="button"]');
        this.continueAsGuestButton = page.locator('button', { name: 'Continue as Guest' });
        this.emailField = page.locator('input[aria-label="Email *"]');
        this.phoneNumberField = page.locator('input[aria-placeholder="-555-0123"]');
        this.addressField = page.locator('input[aria-placeholder="Street Address"]');
        this.zipCodeField = page.locator('input[aria-placeholder="Zip Code"]');
        this.countrySelector = page.locator('#select2-checkout-ch_country-container');
        this.cityField = page.locator('input[aria-placeholder="City"]');
        this.firstNameField = page.locator('input[aria-placeholder="E.g. John"]');
        this.lastNameField = page.locator('input[aria-placeholder="E.g. Smith"]');
        this.genderRadioButtons = page.locator('#passenger-0-ps_gender label');
        this.cardNumberField = page.locator('input[aria-label="Card Number *"]');
        this.expirationDateField = page.locator('input[aria-label="Expiration Date *"]');
        this.cvvField = page.locator('input[aria-label="CVV *"]');
        this.cardholderNameField = page.locator('input[aria-label="Cardholder\'s Name *"]');
        this.submitPaymentButton = page.locator('button.btn.checkout-form__btn[type="submit"]');
        this.confirmationMessage = page.locator('.booker-details__title-text');
    }

    async fillPassengerDetails({ Email, Phone, Address, ZipCode, Country, City, FirstName, LastName, Gender }) {
        await this.emailField.fill(Email);
        await this.phoneNumberField.fill(Phone);
        await this.addressField.fill(Address);
        await this.zipCodeField.fill(ZipCode);
        await this.countrySelector.click();
        await this.page.getByText(Country).click();
        await this.cityField.fill(City);
        await this.firstNameField.fill(FirstName);
        await this.lastNameField.fill(LastName);
        await this.genderRadioButtons.nth(Gender === 'Female' ? 2 : 1).click();
    }

    async waitForConfirmation() {
        await this.confirmationMessage.waitFor({ state: 'visible' });
    }
}