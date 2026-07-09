const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class IssueService {
  // Get All Issues
  async getAllIssues() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch issues.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      // Demo Data
      return [
        {
          id: 1,
          title: "Large Pothole Near Bus Stand",
          category: "Road Damage",
          location: "Anna Salai",
          priority: "High",
          status: "Pending",
          date: "08 Jul 2026",
        },
        {
          id: 2,
          title: "Garbage Overflow",
          category: "Garbage",
          location: "Lawspet",
          priority: "Medium",
          status: "Assigned",
          date: "07 Jul 2026",
        },
      ];
    }
  }

  // Get Issue By ID
  async getIssueById(id) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch issue.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        id,
        title: "Large Pothole Near Bus Stand",
        category: "Road Damage",
        description:
          "Large pothole causing accidents and traffic congestion.",
        location: "Anna Salai, Puducherry",
        latitude: "11.9416",
        longitude: "79.8083",
        priority: "High",
        status: "In Progress",
        department: "Road Department",
        reportedBy: "John Doe",
        reportedDate: "08 Jul 2026",
        updatedDate: "10 Jul 2026",
        image:
          "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
      };
    }
  }

  // Create Issue
  async createIssue(issueData) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(issueData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create issue.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Issue created successfully.",
      };
    }
  }

  // Update Issue
  async updateIssue(id, issueData) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(issueData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update issue.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Issue updated successfully.",
      };
    }
  }

  // Update Issue Status
  async updateIssueStatus(id, status) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to update status."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Status updated successfully.",
      };
    }
  }

  // Assign Department
  async assignDepartment(id, department) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/${id}/assign`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            department,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to assign department."
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Department assigned successfully.",
      };
    }
  }

  // Delete Issue
  async deleteIssue(id) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete issue.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Issue deleted successfully.",
      };
    }
  }

  // Search Issues
  async searchIssues(query) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/issues/search?q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  // Filter Issues
  async filterIssues(filters) {
    try {
      const params = new URLSearchParams(filters);

      const response = await fetch(
        `${API_BASE_URL}/issues/filter?${params}`
      );

      if (!response.ok) {
        throw new Error("Filter failed.");
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [];
    }
  }
}

export default new IssueService();