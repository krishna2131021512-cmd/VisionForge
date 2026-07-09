import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import Toast from "../../components/common/Toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "citizen",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await login(
      formData.email,
      formData.password
    );

    setLoading(false);

    if (!result.success) {
      Toast.error(result.message);
      return;
    }

    Toast.success("Login Successful!");

    if (result.user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900">

      <div className="mb-8 text-center">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg">
          <LogIn size={30} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-500">
          Sign in to continue to Vision Forge
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Role */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Login As
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
          >
            <option value="citizen">
              Citizen
            </option>

            <option value="admin">
              Municipal Admin
            </option>

          </select>

        </div>

        {/* Email */}

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail size={18} />}
          required
        />

        {/* Password */}

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          icon={<Lock size={18} />}
          required
        />

        {/* Demo Credentials */}

        <div className="rounded-xl bg-emerald-50 p-4 text-sm dark:bg-emerald-900/20">

          <p className="font-semibold text-emerald-700 dark:text-emerald-300">
            Demo Credentials
          </p>

          <p className="mt-2">
            Citizen:
            citizen@visionforge.com
          </p>

          <p>Password: citizen123</p>

          <hr className="my-2" />

          <p>
            Admin:
            admin@visionforge.com
          </p>

          <p>Password: admin123</p>

        </div>

        {/* Button */}

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Login
        </Button>

      </form>

      <p className="mt-8 text-center text-sm text-gray-500">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-emerald-600 hover:underline"
        >
          Register
        </Link>

      </p>

    </div>
  );
};

export default Login;