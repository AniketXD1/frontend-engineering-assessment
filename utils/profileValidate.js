export const profileValidate = (name) => {
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());

  if (!isNameValid) return "Name is not valid";

  return null;
};
