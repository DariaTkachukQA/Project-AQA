export default class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.emailInput = "[data-testid='email-input']";
        this.phoneInput = "input[aria-label='Phone*']";
        this.addressInput = "[data-testid='address-input']";
        this.zipCodeInput = "[data-testid='zipCode-input']";
        this.countryDropdown = "[data-testid='country-select']";
        this.cityInput = "[data-testid='city-input']";
        this.continueButton = "[data-testid='pax_Continue']";
        this.paymentFields = {
            cardNumber: "[data-testid='cc_number-input']",
            name: "[data-testid='cc_cardholder_name-input']",
            month: "[data-testid='cc_month-input']",
            year: "[data-testid='cc_year-input']",
            cvv: "[data-testid='cc_cvv-input']"
        };
        this.termsCheckbox = 'input[type="checkbox"]';
        this.bookNowButton = "[data-testid='Book_Now']";
        this.minimizeButton = page.locator('div#min_window');
    }

    async fillContactBillingDetails({ email, phone, address, zipCode, countryCode, city }) {
    //     await this.page.locator('iframe[title="SalesIQ Chatwindow"]')
    // .contentFrame() // Отримуємо контент iframe
    // ?.locator('div[aria-label="Minimize live chat window"]') // Знаходимо елемент по aria-label
    // .click({ timeout: 50000 }); // Клікаємо на елемент

        await this.page.getByTestId('email-input').fill(email);
        await this.page.getByRole('textbox', { name: 'Phone*' }).fill(phone);
        await this.page.getByTestId('address-input').fill(address);
        await this.page.getByTestId('zipCode-input').fill(zipCode);
        await this.page.getByTestId('country-select').click();
        await this.page.getByTestId(`country-select-option-${countryCode}`).click();
        await this.page.getByTestId('city-input').fill(city);
        // await this.page.locator(this.minimizeButton).waitFor(10000);
        // await this.page.locator(this.minimizeButton).click();
    }

    async fillPassengerDetails(passengers) {
        for (let i = 0; i < passengers.length; i++) {
            const { firstName, lastName, gender, nationality, birthMonth, birthDay, birthYear } = passengers[i];


            await this.page.getByTestId(`pax${i}FirstName-input`).click();
            await this.page.getByTestId(`pax${i}FirstName-input`).fill(firstName);
            await this.page.getByTestId(`pax${i}LastName-input`).click();
            await this.page.getByTestId(`pax${i}LastName-input`).fill(lastName);

            if (gender === 'Female') {
                await this.page.getByText('Female').nth(i).click();
            } else if (gender === 'Male') {
                await this.page.getByText('Male').nth(i).click();
            }            

            await this.page.getByTestId(`pax${i}Nationality-combobox`).click();
            await this.page.getByTestId(`pax${i}Nationality-option-${nationality}`).click();
            await this.page.getByTestId(`pax${i}BirthMonth-combobox`).click();
            await this.page.getByTestId(`pax${i}BirthMonth-option-${birthMonth}`).click();
            await this.page.getByTestId(`pax${i}BirthDay-input`).fill(birthDay);
            await this.page.getByTestId(`pax${i}BirthYear-input`).fill(birthYear);
        }
    }

    async enterPaymentDetails(payment) {
        await this.page.locator(this.paymentFields.cardNumber).click();
        await this.page.locator(this.paymentFields.cardNumber).fill(payment.cardNumber);
        await this.page.locator(this.paymentFields.name).click();
        await this.page.locator(this.paymentFields.name).fill(payment.name);
        await this.page.locator(this.paymentFields.month).click();
        await this.page.locator(this.paymentFields.month).fill(payment.month);
        await this.page.locator(this.paymentFields.year).click();
        await this.page.locator(this.paymentFields.year).fill(payment.year);
        await this.page.locator(this.paymentFields.cvv).click();
        await this.page.locator(this.paymentFields.cvv).fill(payment.cvv);
    }
    
    
    async confirmBooking() {
        await this.page.locator(this.termsCheckbox).nth(0).check({ force: true });
        await this.page.locator(this.bookNowButton).click();
    }
}


