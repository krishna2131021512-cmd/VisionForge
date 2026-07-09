import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

const demoUsers = [
  {
    id: 1,
    name: "Citizen User",
    email: "citizen@visionforge.com",
    password: "citizen123",
    role: "citizen",
    avatar: "",
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@visionforge.com",
    password: "admin123",
    role: "admin",
    avatar: "",
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("vf_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const foundUser = demoUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    localStorage.setItem(
      "vf_user",
      JSON.stringify(foundUser)
    );

    setUser(foundUser);

    return {
      success: true,
      user: foundUser,
    };
  };

  const register = async (userData) => {
    const newUser = {
      id: Date.now(),
      role: "citizen",
      avatar: "",
      ...userData,
    };

    localStorage.setItem(
      "vf_user",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return {
      success: true,
      user: newUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("vf_user");
    setUser(null);
  };

  const isAuthenticated = !!user;

  const isAdmin =
    user?.role === "admin";

  const isCitizen =
    user?.role === "citizen";

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated,
        isAdmin,
        isCitizen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);

export default AuthContext;