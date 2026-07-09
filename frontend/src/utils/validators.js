// ==============================
// Required Validation
// ==============================

export const required = (value) => {
  if (
    value === undefined ||
    value === null ||
    value.toString().trim() === ""
  ) {
    return "This field is required.";
  }

  return "";
};

// ==============================
// Name Validation
// ==============================

export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return "Name is required.";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters.";
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name should contain only letters.";
  }

  return "";
};

// ==============================
// Email Validation
// ==============================

export const validateEmail = (email) => {
  if (!email) {
    return "Email is required.";
  }

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return "Invalid email address.";
  }

  return "";
};

// ==============================
// Phone Validation
// ==============================

export const validatePhone = (phone) => {
  if (!phone) {
    return "Phone number is required.";
  }

  const cleaned = phone.replace(/\D/g, "");

  if (!/^[6-9]\d{9}$/.test(cleaned)) {
    return "Enter a valid 10-digit mobile number.";
  }

  return "";
};

// ==============================
// Password Validation
// ==============================

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 8) {
    return "Password must contain at least 8 characters.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain one uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain one lowercase letter.";
  }

  if (!/\d/.test(password)) {
    return "Password must contain one number.";
  }

  return "";
};

// ==============================
// Confirm Password
// ==============================

export const validateConfirmPassword = (
  password,
  confirmPassword
) => {
  if (!confirmPassword) {
    return "Please confirm your password.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return "";
};

// ==============================
// Complaint Title
// ==============================

export const validateTitle = (title) => {
  if (!title) {
    return "Issue title is required.";
  }

  if (title.trim().length < 5) {
    return "Title should be at least 5 characters.";
  }

  return "";
};

// ==============================
// Description
// ==============================

export const validateDescription = (
  description
) => {
  if (!description) {
    return "Description is required.";
  }

  if (description.trim().length < 20) {
    return "Description should contain at least 20 characters.";
  }

  return "";
};

// ==============================
// Location
// ==============================

export const validateLocation = (
  location
) => {
  if (!location) {
    return "Location is required.";
  }

  return "";
};

// ==============================
// Category
// ==============================

export const validateCategory = (
  category
) => {
  if (!category) {
    return "Please select a category.";
  }

  return "";
};

// ==============================
// Image Validation
// ==============================

export const validateImage = (file) => {
  if (!file) {
    return "Please upload an image.";
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    return "Only JPG, PNG and WEBP images are allowed.";
  }

  if (file.size > 5 * 1024 * 1024) {
    return "Image size should be less than 5MB.";
  }

  return "";
};

// ==============================
// Complete Form Validation
// ==============================

export const validateForm = (
  values,
  rules
) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const validator = rules[field];

    const error = validator(values[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

// ==============================
// Check Errors
// ==============================

export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0;
};

export default {
  required,
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  validateTitle,
  validateDescription,
  validateLocation,
  validateCategory,
  validateImage,
  validateForm,
  hasErrors,
};