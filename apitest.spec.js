// import { test, expect } from '@playwright/test';
// import { APIHelper } from '../helpers/APIHelper';
// import { PreCheckoutPage } from '../pages/PreCheckoutPage';
// import { CheckoutPage } from '../pages/CheckoutPage';
// import { ThankYouPage } from '../pages/ThankYouPage';

// const BASE_URL = 'https://airsearch.api.travelinsides.com';
// const SEARCH_ENDPOINT = '/v1/search?cid=OVA101&tripType=RT&fl[0][o]=nyc&fl[0][d]=lax';
// const META_SEARCH_KEY_PATH = 'results[0].key';
// const META_SEARCH_URL = 'https://flights.ovago.com/ms?key=';


// test('MetaSearch Test Flow', async ({ page }) => {
//     // Generate and store random data
//     await PaxContext.getInstance().generateAndStoreRandomData();
    
//     // API call to get meta search key
//     const apiResponse = await APIHelper.get(`${BASE_URL}${SEARCH_ENDPOINT}`);
//     expect(apiResponse.status()).toBe(200);

//     const responseBody = await apiResponse.json();
//     const key = responseBody[META_SEARCH_KEY_PATH];
//     expect(key).not.toBeNull();
//     console.log(`MS key: ${key}`);

//     // Open meta search URL
//     await page.goto(`${META_SEARCH_URL}${key}`);

//     // Pre-checkout page
//     const preCheckoutPage = new PreCheckoutPage(page);
//     await preCheckoutPage.closeChatIfPresent();
//     await preCheckoutPage.clickOnContinueButton();

//     // Checkout page
//     const checkoutPage = new CheckoutPage(page);
//     await expect(checkoutPage.isLoaded()).toBeTruthy();
//     await checkoutPage.fillContactAndDetailsBlock();
//     await checkoutPage.fillPassengers();
//     await checkoutPage.clickOnContinueButtonAfterPax();
//     await checkoutPage.clickOnContinueButtonAfterServices();
//     await checkoutPage.clickOnContinueButtonAfterTravelInsurance();
//     await checkoutPage.fillPaymentDetails();
    
//     // Booking confirmation
//     const thankYouPage = await checkoutPage.clickOnBookNowButton();
//     await expect(thankYouPage.isTitleSuccess()).toBeTruthy();
// });
