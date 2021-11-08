Feature: Accomodation Search

    Scenario: Search for valid location
        Given I open the home page
        When I enter 'Newcastle' as my desired location
        And I select '2022-01-12' to '2022-01-19' as my desired dates
        And I submit the booking details
        And I select the first item on the booking search results