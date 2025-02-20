// Generated from: tests/features/flight_booking.feature
import { test } from "playwright-bdd";

test.describe('Flight Booking', () => {

  test('User books a flight successfully', async ({ Given, page, When, And, Then }) => { 
    await Given('The user opens Home page', null, { page }); 
    await When('The user selects origin "MIA" and destination "LAX"', null, { page }); 
    await And('The user selects departure date "April 20" and return date "April 25"', null, { page }); 
    await And('The user sets travelers number to "2 Adults"', null, { page }); 
    await And('The user chooses flight class "Premium Economy"', null, { page }); 
    await And('The user makes search for available flights', null, { page }); 
    await And('The user selects a random flight and proceed to booking', null, { page }); 
    await And('The user fills Contact Billing details', null, { page }); 
    await And('The user enters passenger details', {"dataTable":{"rows":[{"cells":[{"value":"First Name"},{"value":"Last Name"},{"value":"Gender"},{"value":"Nationality"},{"value":"Birth Month"},{"value":"Birth Day"},{"value":"Birth Year"}]},{"cells":[{"value":"Dari"},{"value":"Terri"},{"value":"Female"},{"value":"US"},{"value":"6"},{"value":"12"},{"value":"1990"}]},{"cells":[{"value":"Andrew"},{"value":"Smith"},{"value":"Male"},{"value":"US"},{"value":"8"},{"value":"12"},{"value":"1990"}]}]}}, { page }); 
    await And('The user clicks the continue button', null, { page }); 
    await And('The user enters payment details', {"dataTable":{"rows":[{"cells":[{"value":"Card Number"},{"value":"Name"},{"value":"Month"},{"value":"Year"},{"value":"CVV"}]},{"cells":[{"value":"4716640240196444"},{"value":"Barbara Elmore T"},{"value":"12"},{"value":"29"},{"value":"123"}]}]}}, { page }); 
    await And('The user accepts the terms and confirm the booking', null, { page }); 
    await Then('The user should see the confirmation message "We are processing your booking"', null, { page }); 
    await And('The user should see the success message with booking details', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/flight_booking.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user opens Home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When The user selects origin \"MIA\" and destination \"LAX\"","stepMatchArguments":[{"group":{"start":24,"value":"\"MIA\"","children":[{"start":25,"value":"MIA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"LAX\"","children":[{"start":47,"value":"LAX","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And The user selects departure date \"April 20\" and return date \"April 25\"","stepMatchArguments":[{"group":{"start":32,"value":"\"April 20\"","children":[{"start":33,"value":"April 20","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"April 25\"","children":[{"start":60,"value":"April 25","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And The user sets travelers number to \"2 Adults\"","stepMatchArguments":[{"group":{"start":34,"value":"\"2 Adults\"","children":[{"start":35,"value":"2 Adults","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And The user chooses flight class \"Premium Economy\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Premium Economy\"","children":[{"start":31,"value":"Premium Economy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And The user makes search for available flights","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And The user selects a random flight and proceed to booking","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And The user fills Contact Billing details","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And The user enters passenger details","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And The user clicks the continue button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And The user enters payment details","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And The user accepts the terms and confirm the booking","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user should see the confirmation message \"We are processing your booking\"","stepMatchArguments":[{"group":{"start":45,"value":"\"We are processing your booking\"","children":[{"start":46,"value":"We are processing your booking","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And The user should see the success message with booking details","stepMatchArguments":[]}]},
]; // bdd-data-end