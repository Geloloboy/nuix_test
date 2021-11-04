const emailAddressInput = "input[id='loginFormEmailInput']";
const passwordInput = "input[id='loginFormPasswordInput']";
const submitButton = "button[id='loginFormSubmitButton']";
const incorrectCredentialAlert = "h5.alert-message"

export const openSignInPage = async () => {
  await browser.url("/login");
};

export const enterEmailAddress = async (emailAddress: string) => {
  await $(emailAddressInput).setValue(emailAddress);
};

export const enterPassword = async (password: string) => {
  await $(passwordInput).setValue(password);
};

export const submitCredentials = async () => {
  await $(submitButton).click();
};

export const verifyIncorrectCredentials = async () => {
  expect(await $(incorrectCredentialAlert)).toExist();
};
