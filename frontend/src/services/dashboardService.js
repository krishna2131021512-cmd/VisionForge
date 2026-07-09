const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class DashboardService {
  // Citizen Dashboard
  async getCitizenDashboard() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/dashboard/citizen`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      // Demo Data
      return {
        stats: {
          totalComplaints: 18,
          resolved: 12,
          pending: 5,
          critical: 1,
        },

        recentComplaints: [
          {
            id: 1,
            title: "Large Pothole Near Bus Stand",
            category: "Road Damage",
            location: "Anna Salai",
            status: "Pending",
            priority: "High",
            date: "08 Jul 2026",
          },
          {
            id: 2,
            title: "Garbage Overflow",
            category: "Garbage",
            location: "Lawspet",
            status: "Resolved",
            priority: "Medium",
            date: "06 Jul 2026",
          },
        ],

        notifications: [
          {
            id: 1,
            title: "Complaint Assigned",
            message:
              "Your complaint has been assigned to Road Department.",
            type: "info",
            time: "2 hours ago",
          },
        ],
      };
    }
  }

  // Admin Dashboard
  async getAdminDashboard() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/dashboard/admin`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch admin dashboard."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        stats: {
          totalComplaints: 1248,
          resolved: 934,
          pending: 214,
          activeUsers: 8425,
        },

        recentComplaints: [
          {
            id: 1,
            title: "Road Damage",
            category: "Road",
            status: "Pending",
            location: "Anna Salai",
            date: "08 Jul 2026",
          },
          {
            id: 2,
            title: "Water Leakage",
            category: "Water",
            status: "Assigned",
            location: "White Town",
            date: "07 Jul 2026",
          },
        ],

        notifications: [
          {
            id: 1,
            title: "New Complaint",
            message:
              "New complaint submitted near Bus Stand.",
            type: "info",
            time: "5 min ago",
          },
        ],
      };
    }
  }

  // Dashboard Statistics
  async getStats() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/dashboard/stats`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch statistics."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        totalComplaints: 1248,
        resolved: 934,
        pending: 214,
        inProgress: 100,
        activeUsers: 8425,
      };
    }
  }

  // Recent Complaints
  async getRecentComplaints() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/dashboard/recent-complaints`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch complaints."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        {
          id: 1,
          title: "Road Damage",
          category: "Road",
          status: "Pending",
          priority: "High",
        },
        {
          id: 2,
          title: "Garbage Overflow",
          category: "Garbage",
          status: "Resolved",
          priority: "Medium",
        },
      ];
    }
  }

  // Recent Notifications
  async getNotifications() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/dashboard/notifications`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch notifications."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        {
          id: 1,
          title: "Complaint Assigned",
          message:
            "Complaint assigned to Road Department.",
          type: "info",
          time: "2 hours ago",
        },
      ];
    }
  }
}

export default new DashboardService();