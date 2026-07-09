// ==============================
// String Helpers
// ==============================

export const capitalize = (text = "") => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const capitalizeWords = (text = "") => {
  return text.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
};

export const truncate = (text = "", length = 100) => {
  if (text.length <= length) return text;

  return `${text.substring(0, length)}...`;
};


// ==============================
// Number Helpers
// ==============================

export const formatNumber = (number = 0) => {
  return new Intl.NumberFormat("en-IN").format(number);
};

export const formatPercentage = (value = 0) => {
  return `${value}%`;
};


// ==============================
// Badge Colors
// ==============================

export const getStatusColor = (status = "") => {
  switch (status.toLowerCase()) {
    case "resolved":
      return "success";

    case "pending":
      return "warning";

    case "assigned":
      return "info";

    case "in progress":
      return "primary";

    case "rejected":
      return "danger";

    default:
      return "secondary";
  }
};

export const getPriorityColor = (priority = "") => {
  switch (priority.toLowerCase()) {
    case "low":
      return "success";

    case "medium":
      return "warning";

    case "high":
      return "danger";

    case "critical":
      return "error";

    default:
      return "secondary";
  }
};


// ==============================
// User Helpers
// ==============================

export const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

export const getRoleLabel = (role = "") => {
  switch (role.toLowerCase()) {
    case "admin":
      return "Administrator";

    case "super_admin":
      return "Super Administrator";

    case "citizen":
      return "Citizen";

    default:
      return role;
  }
};


// ==============================
// Validation
// ==============================

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    value === ""
  );
};

export const isValidEmail = (email = "") => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone = "") => {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ""));
};


// ==============================
// Arrays
// ==============================

export const sortByDate = (
  array = [],
  field = "createdAt"
) => {
  return [...array].sort(
    (a, b) =>
      new Date(b[field]) - new Date(a[field])
  );
};

export const groupBy = (array = [], key) => {
  return array.reduce((result, item) => {
    const group = item[key];

    result[group] = result[group] || [];

    result[group].push(item);

    return result;
  }, {});
};


// ==============================
// File Helpers
// ==============================

export const getFileExtension = (filename = "") => {
  return filename.split(".").pop().toLowerCase();
};

export const formatFileSize = (bytes = 0) => {
  if (bytes === 0) return "0 Bytes";

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
  ];

  const i = Math.floor(
    Math.log(bytes) / Math.log(1024)
  );

  return `${(
    bytes / Math.pow(1024, i)
  ).toFixed(2)} ${sizes[i]}`;
};


// ==============================
// Random Helpers
// ==============================

export const generateId = () => {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 8)
  );
};

export const sleep = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );


// ==============================
// Local Storage
// ==============================

export const saveToStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
};

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};