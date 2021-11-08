const propertyCard = "[data-testid='property-card']";
const propertyCardTitle = "[data-testid='title']";

export const selectFirstBookingItem = async () => {
  const propertyCardEl = await $(propertyCard);
  const propertyTitle = await propertyCardEl.$(propertyCardTitle).getText();

  await propertyCardEl.click();

  return propertyTitle;
};
