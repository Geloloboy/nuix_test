const propertyCardTitle = "[data-testid='title']";
const resultPropertyHeader = "h2#hp_hotel_name"

export const selectFirstBookingItem = async () => {
  const propertyTitleEl = await $(propertyCardTitle);
  const propertyTitleText = await propertyTitleEl.getText();

  await propertyTitleEl.click();
  await browser.switchWindow(propertyTitleText)
  await $(resultPropertyHeader).waitForExist({timeout: 10000})

  return propertyTitleText;
};
