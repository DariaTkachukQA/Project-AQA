export default class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('email-input');
        this.phoneInput = page.getByRole('textbox', { name: 'Phone*' });
        this.addressInput = page.getByTestId('address-input');
        this.zipCodeInput = page.getByTestId('zipCode-input');
        this.countryDropdown = page.getByTestId('country-select');
        this.cityInput = page.getByTestId('city-input');
        this.passengerGenderInput = '#passenger-0-ps_gender label';
        this.nextStepButton = page.locator('button#next-step-bnt.btn.checkout-form__btn[type="button"]');
        this.continueAsGuestButton = page.getByRole('button', { name: 'Continue as Guest' });
        this.submitPaymentButton = page.locator('button[type="submit"]');
        this.confirmationMessage = page.locator('.confirmation-message'); // Adjust selector if needed
    }

    async proceedToCheckout() {
        await this.nextStepButton.click();
    }

    async continueAsGuest() {
        await this.continueAsGuestButton.click();
    }

    async fillPassengerDetails(passengers) {
        for (let i = 0; i < passengers.length; i++) {
            const { firstName, lastName, gender, nationality, birthMonth, birthDay, birthYear } = passengers[i];

            await this.page.getByTestId(`pax${i}FirstName-input`).fill(firstName);
            await this.page.getByTestId(`pax${i}LastName-input`).fill(lastName);

            if (gender) {
                await this.page.getByTestId(`pax${i}Gender-dropdown`).click();
                await this.page.getByText(gender).click();
            }

            await this.page.getByTestId(`pax${i}Nationality-combobox`).click();
            await this.page.getByTestId(`pax${i}Nationality-option-${nationality}`).click();
            await this.page.getByTestId(`pax${i}BirthMonth-combobox`).click();
            await this.page.getByTestId(`pax${i}BirthMonth-option-${birthMonth}`).click();
            await this.page.getByTestId(`pax${i}BirthDay-input`).fill(birthDay);
            await this.page.getByTestId(`pax${i}BirthYear-input`).fill(birthYear);
        }
    }

    async enterPaymentDetails({ CardNumber, ExpirationDate, CVV, CardholderName }) {
        await this.page.getByTestId('card-number-input').fill(CardNumber);
        await this.page.getByTestId('expiration-date-input').fill(ExpirationDate);
        await this.page.getByTestId('cvv-input').fill(CVV);
        await this.page.getByTestId('cardholder-name-input').fill(CardholderName);
    }

    async submitPayment() {
        await this.submitPaymentButton.click();
    }

    async waitForConfirmation() {
        await this.confirmationMessage.waitFor({ state: 'visible', timeout: 10000 });
    }
}

