import { Then } from "@cucumber/cucumber";
import { verifyCarRentalResultsLocation } from "../page-objects/carRentals.page";
import { verifyLoginIsSuccessful } from "../page-objects/home.page";
import {
  incorrectEmailAlert,
  incorrectPasswordAlert,
  verifyCreatePasswordScreenShown,
} from "../page-objects/signIn.page";

Then(
  /^I see that the '(email|password)' alert has the following error message: '(.*)'$/,
  async (fieldName: string, erroMessage: string) => {
    const targetElement =
      fieldName === "email" ? incorrectEmailAlert : incorrectPasswordAlert;
    const targetElementText = await $(targetElement).getText()
    expect(targetElementText).toEqual(erroMessage);
  }
);

Then(
  /^I see that the create password screen is shown$/,
  verifyCreatePasswordScreenShown
);

Then(
  /^I see that the user is logged in successfully$/,
  verifyLoginIsSuccessful
);

Then(
  /^I see car search results for '(.*)'$/,
  async (expectedLocation: string) => {
    verifyCarRentalResultsLocation(expectedLocation);
  }
);
