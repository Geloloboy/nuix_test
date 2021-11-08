import { When } from "@cucumber/cucumber";
import { selectFirstBookingItem } from "../page-objects/bookingResults.page";
import {
  enterPickupLocation,
  submitCarSearchDetails,
} from "../page-objects/carRentals.page";
import {
  enterLocation,
  navigateToCarRentalsPage,
  selectDates,
  submitBookingDetails,
} from "../page-objects/home.page";
import {
  enterEmailAddress,
  enterPassword,
  submitCredential,
} from "../page-objects/signIn.page";

When(/^I enter '(.*)' as my email address$/, async (inputText: string) =>
  enterEmailAddress(inputText)
);

When(/^I enter '(.*)' as my password$/, async (inputText: string) =>
  enterPassword(inputText)
);

When(/^I submit the entered credential$/, submitCredential);

When(
  /^I enter '(.*)' as my (desired|pickup) location$/,
  async (location: string, locationType: string) => {
    if (locationType === "desired") {
      await enterLocation(location);
    } else {
      await enterPickupLocation(location);
    }
  }
);

When(
  /^I select '(.*)' to '(.*)' as my desired dates$/,
  async (checkInDate: string, checkOutDate: string) => {
    await selectDates(checkInDate, checkOutDate);
  }
);

When(
  /^I submit the (booking|car rentals) details$/,
  async (detailType: string) => {
    if (detailType === "booking") {
      await submitBookingDetails();
    } else {
      await submitCarSearchDetails();
    }
  }
);

When(
  /^I select the first item on the booking search results$/,
  selectFirstBookingItem
);

When(/^I navigate to the car rentals page$/, navigateToCarRentalsPage);
