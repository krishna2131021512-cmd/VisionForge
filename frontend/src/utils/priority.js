export const PRIORITY = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
};

export const PRIORITY_OPTIONS = [
  {
    value: PRIORITY.LOW,
    label: "Low",
    color: "green",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    level: 1,
  },
  {
    value: PRIORITY.MEDIUM,
    label: "Medium",
    color: "yellow",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-300",
    level: 2,
  },
  {
    value: PRIORITY.HIGH,
    label: "High",
    color: "orange",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
    borderColor: "border-orange-300",
    level: 3,
  },
  {
    value: PRIORITY.CRITICAL,
    label: "Critical",
    color: "red",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
    borderColor: "border-red-300",
    level: 4,
  },
];

export const getPriorityColor = (priority) => {
  switch (priority?.toLowerCase()) {
    case "low":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
      };

    case "medium":
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        border: "border-yellow-300",
      };

    case "high":
      return {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-300",
      };

    case "critical":
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
      };

    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-700",
        border: "border-gray-300",
      };
  }
};

export const getPriorityLevel = (priority) => {
  switch (priority?.toLowerCase()) {
    case "low":
      return 1;

    case "medium":
      return 2;

    case "high":
      return 3;

    case "critical":
      return 4;

    default:
      return 0;
  }
};

export default PRIORITY;