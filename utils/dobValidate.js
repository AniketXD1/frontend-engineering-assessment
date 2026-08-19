export const dobValidate = (dateOfBirth) => {
  // Date of Birth validation
  if (!dateOfBirth) {
    return "Date of Birth is required";
  }

  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age < 18) {
    return "You must be at least 18 years old";
  }
  return null;
};
