import { Then } from "@cucumber/cucumber";
import { verifyLoginIsSuccessful } from "../page-objects/home.page";
import {
  incorrectEmailAlert,
  incorrectPasswordAlert,
  verifyCreatePasswordScreenShown,
} from "../page-objects/signIn.page";

Then(
  /^I see that the '(email|password)' alert has the following error message: '(.*)'$/,
  function (fieldName: string, erroMessage: string) {
    const targetElement =
      fieldName === "email" ? incorrectEmailAlert : incorrectPasswordAlert;
    expect($(targetElement)).toHaveText(erroMessage);
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
