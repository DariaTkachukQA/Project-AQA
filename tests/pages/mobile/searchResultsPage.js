export default class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.flightCards = page.locator(".search-results__list .search-results__item");
        this.bookButtons = page.locator(".sr-price-wrap__book-btn.btn");
        this.confirmBookButton = page.locator('.btn.btn-primary.mkt-popup-prc-btn');
    }

    async checkIfButtonIsVisible() {
        await this.bookButtons.first().waitFor({ state: "visible", timeout: 10000 });
        const isVisible = await this.bookButtons.first().isVisible();
        if (!isVisible) {
            throw new Error("The 'Select' button is not visible!");
        }
    }

    async selectRandomFlight() {
        const buttons = await this.bookButtons.all();
        if (buttons.length === 0) {
            throw new Error("No flights available for selection.");
        }
        const randomIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomIndex].click();
    }

    async clickConfirmBookButton() {
        await this.confirmBookButton.waitFor({ state: "visible", timeout: 10000 });
        await this.confirmBookButton.click();
    }
}
