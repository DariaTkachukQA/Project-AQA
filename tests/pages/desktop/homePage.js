export default class HomePage {
    constructor(page) {
        this.page = page;
        this.originInput = "#searchform-originlabel-0";
        this.destinationInput = "#searchform-destinationlabel-0";
        this.departureDate = "#departureDate";
        this.travelersDropdown = "text=1 traveler";
        this.flightClassDropdown = "span:text('Economy')";
        this.searchButton = "button.search-form__btn.mkt-srch-frm-btn";
    }

    async navigate() {
        await this.page.goto("https://flights.ovago.hybrid.stage.travel-dev.com/");
    }

    async selectOrigin(origin) {
        await this.page.locator(this.originInput).fill(origin);
        await this.page.locator(this.originInput).click();
        await this.page.getByText(origin).click();
    }

    async selectDestination(destination) {
        await this.page.locator(this.destinationInput).fill(destination);
        await this.page.locator(this.destinationInput).click();
        await this.page.getByText(destination).click();
    }

    async selectDates(depart, returnDate) {
        await this.page.locator(this.departureDate).click();
        await this.page.getByText(depart, { exact: true }).first().click();
        await this.page.getByText(returnDate, { exact: true }).first().click();
    }

    async setTravelers(travelers) {
        const [numAdults] = travelers.split(" ");
        await this.page.getByText("1 traveler").click();
        for (let i = 1; i < parseInt(numAdults); i++) {
            await this.page.locator("#adults").getByRole("button", { name: "+" }).click();
        }
        await this.page.getByRole("link", { name: "Done" }).click();
    }

    async chooseFlightClass(flightClass) {
        await this.page.locator(this.flightClassDropdown).click();
        await this.page.getByText(flightClass).click();
    }

    async searchFlights() {
        await this.page.locator(this.searchButton).click();
    }
}


