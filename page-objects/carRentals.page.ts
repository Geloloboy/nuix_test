const pickupLocationInput = "input#ss_origin";
const submitCarSearchButton = "button[type='submit']";
const locationResult = "li[role='option']";
const carRentalResults = "[data-testid*='results-view-car-card']";
const carRentalResultsTitle = "[data-testid='page-title']";

export const enterPickupLocation = async (desiredLocation: string) => {
  await $(pickupLocationInput).setValue(desiredLocation);
  await $(locationResult).waitForExist({ timeout: 5000 });
  await $(locationResult).click();
};

export const submitCarSearchDetails = async () => {
  await $(submitCarSearchButton).click();
  await $(carRentalResults).waitForExist({ timeout: 60000 });
};

export const verifyCarRentalResultsLocation = async (
  expectedLocation: string
) => {
  expect($(carRentalResultsTitle)).toHaveTextContaining(expectedLocation);
};
