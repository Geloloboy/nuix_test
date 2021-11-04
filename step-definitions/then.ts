import { Then } from "@cucumber/cucumber";
import { verifyMemberInfoExists } from "../page-objects/home.page";
import { verifyIncorrectCredentials } from "../page-objects/signIn.page";

Then(
  /^I see an incorrect credentials error message$/,
  verifyIncorrectCredentials
);

Then(/^I am able to see my member info$/, verifyMemberInfoExists);
