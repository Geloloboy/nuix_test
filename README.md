# nuix_test

## Assumptions:
- The correct URL is https://www.booking.com
- There is no validation for the booking search results test case

## Things to watch out:
- Scenario: Invalid Password => can sometimes fail due to bot security measures
- Scenario: Search for car rentals => fails most of the time due to bot security measures

## How to run tests:
1. ```npm install```
2. Run one of the following:
```npm run wdio-authentication```
```npm run wdio-searchAccomodations```
```npm run wdio-searchCarRentals```

## Bonus Points:

### What other scenarios would you automate in addition to the scenarios listed in this assessment?
Below are some items to name a few:
- Check that the headers that redirect you to an external site works as expected
- Attraction search 
- Airport Taxis search
- Recent booking searches
- Recommended locations

### How would you structure your tests and test suite? Why?
I will use page object model and have a file per page (i.e. Booking, Car Rentals, Attractions, Airport Taxis)

I'd also create a different file for shared components (i.e. Header, Calendars)

For the test suite, it would be on a per page as well since it follows how the users would use the site and be more intuitive for whoever is working on it

### Assuming you had access to the source describe what other ways you would improve on the framework and testing of the application? Explain how you would implement it (don’t have to implement it). Think big as this is to be an enterprise solution
I would create a whitelisted environment (dev) where I can run my test where the bot security measures are not active.

I'd also probably add a few more aria on different buttons so that I can easily hook my tests on to it.

I'm also going to push to move most of the tests on a level lower than the UI tests to reduce time and increase reliability. This will probably be done by rendering a specific page via virtual dom's (React's testing library for example). Other scenarios like navigation and E2E scenarios can still be done on the UI level.
