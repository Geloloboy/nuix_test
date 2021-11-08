Feature: User Authentication

    Scenario: Invalid Email Address
        Given I open the sign in page
        When I enter 'invalid.email' as my email address
        And I submit the entered credential
        Then I see that the 'email' alert has the following error message: 'Make sure the email address you entered is correct.'
    
    Scenario: Invalid Password
        Given I open the sign in page
        When I enter 'sample@gmail.com' as my email address
        And I submit the entered credential
        And I enter 'invalid password' as my password
        And I submit the entered credential
        Then I see that the 'password' alert has the following error message: 'The email and password combination entered doesn't match.'

    Scenario: Valid but unregistered
        Given I open the sign in page
        When I enter 'valid.credentials@gmail.com' as my email address
        And I submit the entered credential
        Then I see that the create password screen is shown

    Scenario: Valid Credentials
        Given I open the sign in page
        When I enter 'valid.credentials@gmail.com' as my email address
        And I submit the entered credential
        And I enter 'valid-password' as my password
        And I submit the entered credential
        Then I see that the user is logged in successfully
