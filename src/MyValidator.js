export const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export const validatePassword = (password) => {
    // Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  export const validatePhoneNumber = (phoneNumber) => {
    // Phone number must be 10 digits and can include optional dashes or spaces
    const phoneNumberRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  export const validateOnlyNumbers = (onlyNumbers) => {
    const onlyNumbersRegex = /^\d+$/;
    return onlyNumbersRegex.test(onlyNumbers);
  };

  export const validateOnlyAlphabets = (onlyAlphabets) => {
    const onlyAlphabetsRegex = /^[A-Za-z]+$/;
    return onlyAlphabetsRegex.test(onlyAlphabets);
  };

  export const validateDate = (date) => {
    // Date must be in the format MM/DD/YYYY and should be a valid date
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return dateRegex.test(date);
  };