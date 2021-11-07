const emailAddressInput = "input[data-ga-label='username']";
export const incorrectEmailAlert = "#username-note";

const passwordInput = "input[data-ga-label='password']";
export const incorrectPasswordAlert = "#password-note";

const submitButton = "button[type='submit']";

export const openSignInPage = async () => {
  await browser.url("https://account.booking.com/sign-in");
};

export const enterEmailAddress = async (emailAddress: string) => {
  await $(emailAddressInput).setValue(emailAddress);
};

export const submitCredential = async () => {
  await $(submitButton).click();
};

export const enterPassword = async (password: string) => {
  await $(passwordInput).setValue(password);
};
