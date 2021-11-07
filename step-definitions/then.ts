import { Then } from "@cucumber/cucumber";
import {
  incorrectEmailAlert,
  incorrectPasswordAlert,
} from "../page-objects/signIn.page";

Then(
  /^I see that the '(email|password)' alert has the following error message: '(.*)'$/,
  function (fieldName: string, erroMessage: string) {
    const targetElement =
      fieldName === "email" ? incorrectEmailAlert : incorrectPasswordAlert;
    expect($(targetElement)).toHaveText(erroMessage);
  }
);
