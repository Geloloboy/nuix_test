Feature: User Authentication

    Scenario: Invalid Credentials
        Given I open the sign in page
        When I enter 'invalid.credentials@somewhere.com' as my email address
        And I enter 'blubbertext' as my password
        And I submit my credentials
        Then I see an incorrect credentials error message
    
    Scenario: Valid Credentials
        Given I open the sign in page
        When I enter 'valid.credentials@somewhere.com' as my email address
        And I enter 'blubbertext' as my password
        And I submit my credentials
        Then I am able to see my member info