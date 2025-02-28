
Feature: Flight Booking

  Scenario: User books a flight successfully
    Given The user opens Home page
    When The user selects origin "MIA" and destination "LAX"
    And The user selects departure date "April 20" and return date "April 25"
    # And The user sets travelers number to "2 Adults"
    And The user chooses flight class "Premium Economy"
    And The user makes search for available flights
    And The user selects a random flight and proceed to booking
    And The user fills Contact Billing details
    And The user enters passenger details
      | First Name | Last Name | Gender  | Nationality | Birth Month | Birth Day | Birth Year |
      | Dari       | Terri     | Female  | US          | 6           | 12        | 1990       |
      # | Andrew     | Smith     | Male    | US          | 8           | 12        | 1990       |
    And The user clicks the continue button
    And The user enters payment details 
      | Card Number         | Name               | Month | Year | CVV  |
      | 4716640240196444    | Barbara Elmore T   | 12    | 29   | 123  |
    And The user accepts the terms and confirm the booking
    Then The user should see the confirmation message "We are processing your booking"
    And The user should see the success message with booking details
