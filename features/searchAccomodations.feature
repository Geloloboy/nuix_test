Feature: Accomodation Search

    Scenario Outline: Search for valid location
        Given I open the home page
        When I enter '<location>' as my desired location
        And I select '<checkInDate>' to '<checkOutDate>' as my desired dates
        And I submit the booking details
        And I select the first item on the booking search results
        
        Examples:
            | location      | checkInDate   | checkOutDate  |
            | Newcastle     | 2021-12-12    | 2022-01-05    |
            | Canberra      | 2022-01-15    | 2022-01-22    |
            | Gold Coast    | 2022-03-01    | 2022-03-25    |