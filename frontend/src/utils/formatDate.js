export const formatDate = (
  date,
  options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }
) => {
  if (!date) return "-";

  try {
    return new Date(date).toLocaleDateString(
      "en-IN",
      options
    );
  } catch (error) {
    return date;
  }
};

export const formatDateTime = (date) => {
  if (!date) return "-";

  try {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch (error) {
    return date;
  }
};

export const formatTime = (date) => {
  if (!date) return "-";

  try {
    return new Date(date).toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  } catch (error) {
    return date;
  }
};

export const formatRelativeTime = (date) => {
  if (!date) return "-";

  const now = new Date();
  const target = new Date(date);

  const diff = Math.floor(
    (now - target) / 1000
  );

  if (diff < 60) return "Just now";
  if (diff < 3600)
    return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400)
    return `${Math.floor(diff / 3600)} hrs ago`;
  if (diff < 604800)
    return `${Math.floor(diff / 86400)} days ago`;

  return formatDate(date);
};

export default formatDate;