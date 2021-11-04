import { When } from '@cucumber/cucumber';
import { enterEmailAddress, enterPassword, submitCredentials } from '../page-objects/signIn.page';

When(/^I enter '(.*)' as my email address$/, async (inputText: string) => enterEmailAddress(inputText));
When(/^I enter '(.*)' as my password$/, async (inputText: string) => enterPassword(inputText));
When(/^I submit my credentials$/, submitCredentials);