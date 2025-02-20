
Feature: Flight Booking

  Scenario: User books a flight successfully
    Given I am on the flight booking website
    When I select origin "MIA" and destination "LAX"
    And I select departure date "April 20" and return date "April 25"
    And I set traveler details to "2 Adults"
    And I choose flight class "Premium Economy"
    And I search for available flights
    And I select a random flight and proceed to booking
    And I fill in passenger details form
    And I enter passenger details
      | First Name | Last Name | Gender  | Nationality | Birth Month | Birth Day | Birth Year |
      | Dari       | Terri     | Female  | US          | 6           | 12        | 1990       |
      | Andrew     | Smith     | Male    | US          | 8           | 12        | 1990       |
    And Click continue button
    And I enter payment details 
      | Card Number         | Name               | Month | Year | CVV  |
      | 4716640240196444    | Barbara Elmore T   | 12    | 29   | 123  |
    And I accept the terms and confirm the booking
    Then I should see the confirmation message "We are processing your booking"
    And I should see the success message with booking details
