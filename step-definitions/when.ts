import { When } from "@cucumber/cucumber";
import { selectFirstBookingItem } from "../page-objects/bookingResults.page";
import {
  enterLocation,
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
  /^I enter '(.*)' as my desired location$/,
  async (desiredLocation: string) => {
    await enterLocation(desiredLocation);
  }
);

When(
  /^I select '(.*)' to '(.*)' as my desired dates$/,
  async (checkInDate: string, checkOutDate: string) => {
    await selectDates(checkInDate, checkOutDate);
  }
);

When(/^I submit the booking details$/, submitBookingDetails);

When(
  /^I select the first item on the booking search results$/,
  selectFirstBookingItem
);
