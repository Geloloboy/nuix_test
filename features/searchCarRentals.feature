Feature: Care Rentals Search

    Scenario: Search for car rentals
        Given I open the home page
        When I navigate to the car rentals page
        And I enter 'Newcastle Airport' as my pickup location
        And I submit the car rentals details
        Then I see car search results for 'Newcastle Airport'
