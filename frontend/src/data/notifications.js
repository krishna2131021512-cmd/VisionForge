export const notifications = [
  {
    id: 1,
    title: "Complaint Submitted",
    message:
      "Your complaint regarding a pothole has been submitted successfully.",
    type: "success",
    status: "Unread",
    role: "citizen",
    createdAt: "2026-07-08 09:30 AM",
    read: false,
  },

  {
    id: 2,
    title: "Complaint Assigned",
    message:
      "Your complaint has been assigned to the Road Department.",
    type: "info",
    status: "Unread",
    role: "citizen",
    createdAt: "2026-07-08 11:15 AM",
    read: false,
  },

  {
    id: 3,
    title: "Work In Progress",
    message:
      "Municipal workers have started repairing the reported issue.",
    type: "warning",
    status: "Read",
    role: "citizen",
    createdAt: "2026-07-09 10:20 AM",
    read: true,
  },

  {
    id: 4,
    title: "Complaint Resolved",
    message:
      "Your complaint has been successfully resolved. Thank you for your patience.",
    type: "success",
    status: "Read",
    role: "citizen",
    createdAt: "2026-07-10 04:45 PM",
    read: true,
  },

  {
    id: 5,
    title: "New Complaint Received",
    message:
      "A new complaint has been reported near Anna Salai.",
    type: "info",
    status: "Unread",
    role: "admin",
    createdAt: "2026-07-08 08:40 AM",
    read: false,
  },

  {
    id: 6,
    title: "Department Assigned",
    message:
      "Complaint VF-2026-024 has been assigned to the Water Department.",
    type: "success",
    status: "Unread",
    role: "admin",
    createdAt: "2026-07-08 01:15 PM",
    read: false,
  },

  {
    id: 7,
    title: "High Priority Alert",
    message:
      "A critical road accident complaint requires immediate attention.",
    type: "error",
    status: "Unread",
    role: "admin",
    createdAt: "2026-07-08 03:20 PM",
    read: false,
  },

  {
    id: 8,
    title: "Weekly Report Generated",
    message:
      "The municipal weekly analytics report is ready for download.",
    type: "info",
    status: "Read",
    role: "admin",
    createdAt: "2026-07-09 09:00 AM",
    read: true,
  },

  {
    id: 9,
    title: "Department Performance",
    message:
      "Sanitation Department achieved a 92% complaint resolution rate this week.",
    type: "success",
    status: "Read",
    role: "admin",
    createdAt: "2026-07-09 11:45 AM",
    read: true,
  },

  {
    id: 10,
    title: "System Maintenance",
    message:
      "Scheduled server maintenance will take place tonight from 11:00 PM to 1:00 AM.",
    type: "warning",
    status: "Unread",
    role: "admin",
    createdAt: "2026-07-10 06:00 PM",
    read: false,
  },
];

export default notifications;