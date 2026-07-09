import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  UserPlus,
} from "lucide-react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import Toast from "../../components/common/Toast";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      Toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    const result = await register({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    setLoading(false);

    if (!result.success) {
      Toast.error("Registration failed.");
      return;
    }

    Toast.success(
      "Registration Successful!"
    );

    navigate("/dashboard");
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900">
      {/* Header */}

      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg">
          <UserPlus size={30} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create Account
        </h1>

        <p className="mt-2 text-gray-500">
          Join Vision Forge and report civic
          issues easily.
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          icon={<User size={18} />}
          required
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail size={18} />}
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          icon={<Phone size={18} />}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
          icon={<Lock size={18} />}
          required
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<Lock size={18} />}
          required
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Create Account
        </Button>
      </form>

      {/* Footer */}

      <p className="mt-8 text-center text-sm text-gray-500">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-emerald-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;