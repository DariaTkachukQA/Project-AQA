// Generated from: tests/features/flight_booking_mweb.feature
import { test } from "playwright-bdd";

test.describe('Flight Booking on Mobile', () => {

  test('User books a flight on a mobile device', async ({ Given, page, When, And, Then }) => { 
    await Given('the user opens the flight booking website on a mobile device', null, { page }); 
    await When('the user accepts cookies and minimizes the chat window', null, { page }); 
    await And('the user searches for a flight with the following details:', {"dataTable":{"rows":[{"cells":[{"value":"Origin"},{"value":"Destination"}]},{"cells":[{"value":"MIA"},{"value":"LAX"}]}]}}, { page }); 
    await And('the user selects the following travel dates:', {"dataTable":{"rows":[{"cells":[{"value":"Departure"},{"value":"Return"}]},{"cells":[{"value":"March 9"},{"value":"March 13"}]}]}}, { page }); 
    await And('the user chooses the following class:', {"dataTable":{"rows":[{"cells":[{"value":"Class"}]},{"cells":[{"value":"Premium Economy"}]}]}}, { page }); 
    await And('the user clicks on the search button', null, { page }); 
    await And('the user selects a random flight', null, { page }); 
    await And('the user proceeds to checkout', null, { page }); 
    await And('the user continues as a guest', null, { page }); 
    await And('the user fills in the following passenger details:', {"dataTable":{"rows":[{"cells":[{"value":"Email"},{"value":"Phone"},{"value":"Address"},{"value":"Zip Code"},{"value":"Country"},{"value":"City"},{"value":"First Name"},{"value":"Last Name"},{"value":"Gender"}]},{"cells":[{"value":"dari.terri@kiv.dev"},{"value":"19074861280"},{"value":"Chkalova"},{"value":"12345"},{"value":"Aland Islands"},{"value":"Milas"},{"value":"Dari"},{"value":"Terri"},{"value":"Female"}]}]}}, { page }); 
    await And('the user fills in the following passport details:', {"dataTable":{"rows":[{"cells":[{"value":"Nationality"},{"value":"Birth Month"},{"value":"Birth Day"},{"value":"Birth Year"}]},{"cells":[{"value":"Afghanistan"},{"value":"07"},{"value":"23"},{"value":"2000"}]}]}}, { page }); 
    await And('the user enters the following payment details:', {"dataTable":{"rows":[{"cells":[{"value":"Card Number"},{"value":"Expiration Date"},{"value":"CVV"},{"value":"Cardholder Name"}]},{"cells":[{"value":"4111 1111 1111 1111"},{"value":"12 / 29"},{"value":"123"},{"value":"Barbar J"}]}]}}, { page }); 
    await And('the user submits the payment', null, { page }); 
    await Then('the user should see the booking confirmation message'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/flight_booking_mweb.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user opens the flight booking website on a mobile device","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user accepts cookies and minimizes the chat window","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user searches for a flight with the following details:","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user selects the following travel dates:","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user chooses the following class:","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And the user clicks on the search button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And the user selects a random flight","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user proceeds to checkout","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user continues as a guest","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the user fills in the following passenger details:","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And the user fills in the following passport details:","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And the user enters the following payment details:","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And the user submits the payment","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the user should see the booking confirmation message","stepMatchArguments":[]}]},
]; // bdd-data-end