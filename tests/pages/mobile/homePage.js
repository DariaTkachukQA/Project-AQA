export default class HomePage {
    constructor(page) {
        this.page = page;
        this.originInput = "#searchform-originlabel-0";
        this.destinationInput = "#searchform-destinationlabel-0";
        this.departureDate = "#departureDate";
        this.travelersDropdown = "text=1 traveler";
        this.flightClassDropdown = "span:text('Economy')";
        this.searchButton = "button.search-form__btn.mkt-srch-frm-btn";
        this.acceptCookiesButton = "div.btn.cookies-convention__btn.js-cookies-ok";
        this.chatWindow = 'iframe[title="SalesIQ Chatwindow"]';
    }

    async navigatePage() {
        await this.page.goto("https://flights.ovago.hybrid.stage.travel-dev.com/");
    }

    async acceptCookies() {
        await this.page.locator(this.acceptCookiesButton).click();
    }

    async minimizeChatWindow() {
        const chatFrame = await this.page.frameLocator(this.chatWindow);
        await chatFrame.getByLabel('Minimize live chat window').click({ timeout: 50000 });
    }

    async searchOrigin(origin) {
        await this.page.locator(this.originInput).focus();
        await this.page.locator(this.originInput).fill(origin);
        await this.page.locator(this.originInput).click();
        await this.page.getByText('Miami International').nth(1).click();
    }
    async searchDestination(destination) {
        await this.page.locator(this.destinationInput).focus();
        await this.page.locator(this.destinationInput).fill(destination);
        await this.page.getByText(destination).nth(1).click();
        // await this.page.locator(this.destinationInput).fill(destination);
        // await this.page.getByText('LAX Los Angeles').click();
    }

    async selectDates(departureDate, returnDate) {
            // await this.page.locator(this.departureDate).click();
            
            // Click departure date
            await page.getByRole('textbox', { name: 'Feb 2025 Saturday' }).click();
            await page.locator('.month2 > tbody > tr:nth-child(4) > td:nth-child(2) > .day').click();
            await page.locator('.month2 > tbody > tr:nth-child(4) > td:nth-child(6) > .day').click();
            
            // Save selection
            await this.page.getByRole('button', { name: 'Save' }).click();
        
        // await this.page.locator(this.departureDate).click();
        // await this.page.locator(`.month2 > tbody > tr:nth-child(${departure.row}) > td:nth-child(${departure.column}) .day`).click();
        // await this.page.locator(`.month2 > tbody > tr:nth-child(${returnDate.row}) > td:nth-child(${returnDate.column}) .day`).click();
        // await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async chooseFlightClass(flightClass) {
        await page.getByText('Easy way to book flight ticketInstall').check();
        await page.locator('span').filter({ hasText: 'Economy' }).click();
        await this.page.getByText(flightClass).click();
    }

    async searchFlights() {
        await this.page.locator(this.searchButton).nth(0).click();
    }
}
