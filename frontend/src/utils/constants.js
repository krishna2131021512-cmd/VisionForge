// ==============================
// Application Information
// ==============================

export const APP_NAME = "Vision Forge";

export const APP_VERSION = "1.0.0";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

export const DEFAULT_LANGUAGE = "English";

export const DEFAULT_THEME = "light";

export const ITEMS_PER_PAGE = 10;

export const MAP_DEFAULT_CENTER = {
  lat: 11.9416,
  lng: 79.8083,
};

export const MAP_DEFAULT_ZOOM = 14;


// ==============================
// Local Storage Keys
// ==============================

export const STORAGE_KEYS = {
  TOKEN: "vf_token",
  USER: "vf_user",
  THEME: "vf_theme",
  LANGUAGE: "vf_language",
  NOTIFICATIONS: "vf_notifications",
};


// ==============================
// User Roles
// ==============================

export const USER_ROLES = {
  CITIZEN: "citizen",
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
};


// ==============================
// Complaint Status
// ==============================

export const COMPLAINT_STATUS = [
  "Pending",
  "Assigned",
  "In Progress",
  "Resolved",
  "Rejected",
];


// ==============================
// Priority Levels
// ==============================

export const PRIORITY_LEVELS = [
  "Low",
  "Medium",
  "High",
  "Critical",
];


// ==============================
// Complaint Categories
// ==============================

export const COMPLAINT_CATEGORIES = [
  "Road Damage",
  "Garbage",
  "Water Supply",
  "Drainage",
  "Street Light",
  "Electricity",
  "Traffic",
  "Public Property",
  "Parks & Gardens",
  "Others",
];


// ==============================
// Departments
// ==============================

export const DEPARTMENTS = [
  "Road Department",
  "Sanitation Department",
  "Water Supply Department",
  "Electricity Department",
  "Drainage Department",
  "Traffic Department",
  "Parks & Gardens Department",
  "Public Buildings Department",
];


// ==============================
// Notification Types
// ==============================

export const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};


// ==============================
// Chart Colors
// ==============================

export const CHART_COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#84CC16",
  "#EC4899",
];


// ==============================
// Routes
// ==============================

export const ROUTES = {
  HOME: "/",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",

  CITIZEN_DASHBOARD: "/dashboard",
  REPORT_ISSUE: "/report-issue",
  MY_COMPLAINTS: "/my-complaints",
  ISSUE_DETAILS: "/issue/:id",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  NOTIFICATIONS: "/notifications",
  HELP_CENTER: "/help-center",

  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_ISSUES: "/admin/issues",
  ADMIN_DEPARTMENTS: "/admin/departments",
  ADMIN_USERS: "/admin/users",
  ADMIN_ANALYTICS: "/admin/analytics",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_NOTIFICATIONS: "/admin/notifications",
  ADMIN_PROFILE: "/admin/profile",
  ADMIN_SETTINGS: "/admin/settings",
};


// ==============================
// File Upload
// ==============================

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];


// ==============================
// Pagination
// ==============================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  PAGE_SIZE: 10,
};


// ==============================
// Date Formats
// ==============================

export const DATE_FORMAT = "DD MMM YYYY";

export const DATETIME_FORMAT =
  "DD MMM YYYY, hh:mm A";