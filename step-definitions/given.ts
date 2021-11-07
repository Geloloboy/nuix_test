import { Given } from "@cucumber/cucumber";
import { openHomePage } from "../page-objects/home.page";
import { openSignInPage } from "../page-objects/signIn.page";

Given(/^I open the home page$/, openHomePage);
Given(/^I open the sign in page$/, openSignInPage);
