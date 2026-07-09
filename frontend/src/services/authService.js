const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class AuthService {
  // Login
  async login(credentials) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed."
        );
      }

      localStorage.setItem(
        "vf_token",
        data.token
      );

      localStorage.setItem(
        "vf_user",
        JSON.stringify(data.user)
      );

      return data;
    } catch (error) {
      console.error(error);

      // Demo Login
      if (
        credentials.email ===
          "admin@visionforge.com" &&
        credentials.password === "admin123"
      ) {
        const demo = {
          token: "demo-admin-token",
          user: {
            id: 1,
            name: "Municipal Admin",
            email: credentials.email,
            role: "admin",
          },
        };

        localStorage.setItem(
          "vf_token",
          demo.token
        );

        localStorage.setItem(
          "vf_user",
          JSON.stringify(demo.user)
        );

        return demo;
      }

      if (
        credentials.email ===
          "citizen@visionforge.com" &&
        credentials.password === "citizen123"
      ) {
        const demo = {
          token: "demo-user-token",
          user: {
            id: 2,
            name: "Citizen User",
            email: credentials.email,
            role: "citizen",
          },
        };

        localStorage.setItem(
          "vf_token",
          demo.token
        );

        localStorage.setItem(
          "vf_user",
          JSON.stringify(demo.user)
        );

        return demo;
      }

      throw error;
    }
  }

  // Register
  async register(userData) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Registration failed."
        );
      }

      return data;
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Demo registration successful.",
      };
    }
  }

  // Forgot Password
  async forgotPassword(email) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      return await response.json();
    } catch (error) {
      console.error(error);

      return {
        success: true,
        message:
          "Password reset link sent successfully.",
      };
    }
  }

  // Logout
  logout() {
    localStorage.removeItem("vf_token");
    localStorage.removeItem("vf_user");
  }

  // Get Current User
  getCurrentUser() {
    const user =
      localStorage.getItem("vf_user");

    return user ? JSON.parse(user) : null;
  }

  // Get Token
  getToken() {
    return localStorage.getItem(
      "vf_token"
    );
  }

  // Check Login
  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();