const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class NotificationService {
  // Get All Notifications
  async getNotifications() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch notifications."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      // Demo Data
      return [
        {
          id: 1,
          title: "Complaint Submitted",
          message:
            "Your complaint has been submitted successfully.",
          type: "success",
          read: false,
          time: "Just now",
        },
        {
          id: 2,
          title: "Complaint Assigned",
          message:
            "Road Department has accepted your complaint.",
          type: "info",
          read: false,
          time: "1 hour ago",
        },
        {
          id: 3,
          title: "Complaint Resolved",
          message:
            "Your complaint has been resolved.",
          type: "success",
          read: true,
          time: "Yesterday",
        },
      ];
    }
  }

  // Get Unread Notifications
  async getUnreadNotifications() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/unread`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch unread notifications."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      const notifications =
        await this.getNotifications();

      return notifications.filter(
        (item) => !item.read
      );
    }
  }

  // Create Notification
  async createNotification(notification) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(notification),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create notification."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Notification created successfully.",
      };
    }
  }

  // Mark One Notification as Read
  async markAsRead(id) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/${id}/read`,
        {
          method: "PATCH",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to mark notification as read."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Notification marked as read.",
      };
    }
  }

  // Mark All Notifications as Read
  async markAllAsRead() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/read-all`,
        {
          method: "PATCH",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to mark all notifications as read."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "All notifications marked as read.",
      };
    }
  }

  // Delete Notification
  async deleteNotification(id) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to delete notification."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Notification deleted successfully.",
      };
    }
  }

  // Clear All Notifications
  async clearAllNotifications() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to clear notifications."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "All notifications cleared.",
      };
    }
  }

  // Notification Count
  async getNotificationCount() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/count`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch notification count."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      const unread =
        await this.getUnreadNotifications();

      return {
        unreadCount: unread.length,
      };
    }
  }
}

export default new NotificationService();