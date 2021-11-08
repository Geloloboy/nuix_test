import { carRentalsLink } from "./header";

const locationInput = "input#ss";

const calendarOpenEl = "[data-component='search/dates/date-field-select']";
const submitBookingDetailsButton = "button.sb-searchbox__button ";
const nextCalendarScreen = "[data-bui-ref='calendar-next']";
const profileMenuLink =
  "[aria-describedby='profile-menu-trigger--title profile-menu-trigger--content']";

export const openHomePage = async () => {
  await browser.url("");
};

export const navigateToCarRentalsPage = async () => {
  await $(carRentalsLink).click();
};

export const verifyLoginIsSuccessful = async () => {
  await $(profileMenuLink).waitForExist({ timeout: 20000 });
};

export const enterLocation = async (desiredLocation: string) => {
  await $(locationInput).setValue(desiredLocation);
};

const validateDateFormat = (inputDates: string[]) => {
  const dateRegex = new RegExp(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
  );
  inputDates.forEach((inputDate) => {
    if (!dateRegex.test(inputDate)) {
      throw `Error: Entered date, ${inputDate}, is not in the correct format`;
    }
  });
};

const validateDateValidity = (checkInDate: string, checkOutDate: string) => {
  const checkInDateTime = new Date(checkInDate).getTime();
  const checkOutDateTime = new Date(checkOutDate).getTime();
  const currentDateTime = new Date().getTime();

  if (checkInDateTime > checkOutDateTime) {
    throw "Error: Check in date cannot be later than Check out date";
  }
  if (checkInDateTime < currentDateTime) {
    throw "Error: Check in date cannot be earlier than Check in date";
  }
};

const searchForCalendarDate = async (dateSelector: string) => {
  await $(nextCalendarScreen).waitForExist({ timeout: 5000 });
  var isDateSelectorShow = await $(dateSelector).isExisting();
  while (!isDateSelectorShow) {
    await $(nextCalendarScreen).click();
    isDateSelectorShow = await $(dateSelector).isExisting();
  }
  await $(dateSelector).click();
};

export const selectDates = async (
  checkInDate: string,
  checkOutDate: string
) => {
  const checkInDateSel = `[data-date='${checkInDate}']`;
  const checkOutDateSel = `[data-date='${checkOutDate}']`;

  validateDateFormat([checkInDate, checkOutDate]);
  validateDateValidity(checkInDate, checkOutDate);

  await $(calendarOpenEl).click();
  await searchForCalendarDate(checkInDateSel);
  await searchForCalendarDate(checkOutDateSel);
};

export const submitBookingDetails = async () => {
  await $(submitBookingDetailsButton).click();
};
