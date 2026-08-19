export const locationValidate = (country, state, city) => {
  if (!country) {
    return "Please select your country";
  }

  if (!state) {
    return "Please select your state";
  }

  if (!city) {
    return "Please select your city";
  }

  return null;
};
