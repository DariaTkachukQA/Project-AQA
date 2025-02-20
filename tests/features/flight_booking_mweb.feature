Feature: Flight Booking on Mobile

  Scenario: User books a flight on a mobile device
    Given the user opens the flight booking website on a mobile device
    When the user accepts cookies and minimizes the chat window
    And the user searches for a flight with the following details:
      | Origin | Destination |
      | MIA    | LAX         |
    And the user selects the following travel dates:
      | Departure | Return  |
      | March 9   | March 13|
    And the user chooses the following class:
      | Class          |
      | Premium Economy|
    And the user clicks on the search button
    And the user selects a random flight
    And the user proceeds to checkout
    And the user continues as a guest
    And the user fills in the following passenger details:
      | Email                 | Phone        | Address   | Zip Code | Country        | City  | First Name | Last Name | Gender |
      | dari.terri@kiv.dev    | 19074861280  | Chkalova  | 12345    | Aland Islands  | Milas | Dari       | Terri     | Female |
    And the user fills in the following passport details:
      | Nationality  | Birth Month | Birth Day | Birth Year |
      | Afghanistan  | 07          | 23        | 2000       |
    And the user enters the following payment details:
      | Card Number          | Expiration Date | CVV | Cardholder Name |
      | 4111 1111 1111 1111  | 12 / 29         | 123 | Barbar J        |
    And the user submits the payment
    Then the user should see the booking confirmation message

