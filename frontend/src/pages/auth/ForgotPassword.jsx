import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, KeyRound } from "lucide-react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Toast from "../../components/common/Toast";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);

      Toast.success(
        "Password reset link has been sent to your email."
      );

      setEmail("");
    }, 2000);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900">

      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg">
          <KeyRound size={30} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Forgot Password?
        </h1>

        <p className="mt-2 text-gray-500">
          Enter your registered email address.
          We'll send you a password reset link.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          icon={<Mail size={18} />}
          required
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Send Reset Link
        </Button>

      </form>

      {/* Footer */}

      <div className="mt-8 text-center">

        <Link
          to="/login"
          className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>

      </div>

    </div>
  );
};

export default ForgotPassword;