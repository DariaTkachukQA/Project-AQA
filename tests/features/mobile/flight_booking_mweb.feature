
Feature: Flight Booking Process with Custom Page Objects

  Scenario: Booking a flight successfully as a guest
    Given the user opens the flight booking website
    When the user accepts cookies
    When the user minimizes the chat window
    When the user searches for flights from "MIA" to "LAX"
    When the user selects "Economy" class
    When the user clicks on the search button
    When the user selects a flight
    When the user proceeds to checkout as a guest
    When the user fills in passenger details
      | Email             | Phone       | Address        | City   | Country | FirstName | LastName | Gender |
      | test@example.com  | 1234567890  | 123 Street     | City   | Country | John      | Doe      | Male   |
    When the user enters passport details
      | Nationality | BirthMonth | BirthDay | BirthYear |
      | Country     | 01         | 01       | 1990      |
    When the user enters payment information
      | CardNumber           | ExpirationDate | CVV  | CardholderName |
      | 4111111111111111     | 12/29          | 123  | John Doe       |
    When the user submits the payment
    Then the user should see a booking confirmation
