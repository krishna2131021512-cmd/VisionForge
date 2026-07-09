const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class AnalyticsService {
  // Dashboard Statistics
  async getDashboardStats() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/dashboard`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard statistics.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      // Demo Data
      return {
        totalComplaints: 1248,
        resolvedComplaints: 934,
        pendingComplaints: 214,
        activeUsers: 8425,
      };
    }
  }

  // Monthly Complaints
  async getMonthlyComplaints() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/monthly`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch monthly analytics.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        { name: "Jan", value: 120 },
        { name: "Feb", value: 145 },
        { name: "Mar", value: 170 },
        { name: "Apr", value: 190 },
        { name: "May", value: 165 },
        { name: "Jun", value: 220 },
      ];
    }
  }

  // Complaint Categories
  async getCategoryAnalytics() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/categories`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch category analytics.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        { name: "Road", value: 220 },
        { name: "Garbage", value: 170 },
        { name: "Water", value: 120 },
        { name: "Drainage", value: 80 },
        { name: "Electricity", value: 95 },
      ];
    }
  }

  // Department Performance
  async getDepartmentPerformance() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/departments`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch department performance."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        { name: "Road", value: 88 },
        { name: "Garbage", value: 91 },
        { name: "Water", value: 76 },
        { name: "Drainage", value: 71 },
        { name: "Electricity", value: 83 },
      ];
    }
  }

  // Resolution Trend
  async getResolutionTrend() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/resolution`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch resolution trend.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [
        { name: "Jan", value: 90 },
        { name: "Feb", value: 110 },
        { name: "Mar", value: 135 },
        { name: "Apr", value: 150 },
        { name: "May", value: 170 },
        { name: "Jun", value: 200 },
      ];
    }
  }

  // Citizen Satisfaction
  async getCitizenSatisfaction() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/analytics/satisfaction`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch citizen satisfaction."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        satisfaction: 94,
        averageResolutionDays: 2.8,
        feedbacks: 1865,
      };
    }
  }
}

export default new AnalyticsService();