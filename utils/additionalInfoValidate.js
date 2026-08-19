export const additionalInfoValidate = (role, category, source) => {
  if (!role) {
    return "Please select your role";
  }

  if (!category) {
    return "Please select your category";
  }

  if (!source) {
    return "Please select how you heard about us";
  }

  return null;
};
