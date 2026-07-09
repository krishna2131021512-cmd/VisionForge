import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({
  children,
}) => {
  const [notifications, setNotifications] =
    useState(() => {
      const saved = localStorage.getItem(
        "vf_notifications"
      );

      return saved ? JSON.parse(saved) : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "vf_notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  // Add Notification
  const addNotification = ({
    title,
    message,
    type = "info",
  }) => {
    const notification = {
      id: Date.now(),
      title,
      message,
      type,
      read: false,
      createdAt: new Date().toISOString(),
    };

    setNotifications((prev) => [
      notification,
      ...prev,
    ]);
  };

  // Mark as Read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  // Mark All Read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  // Delete Notification
  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Clear All
  const clearNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () =>
  useContext(NotificationContext);

export default NotificationContext;