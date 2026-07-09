import { useState } from "react";
import {
  Moon,
  Sun,
  Bell,
  Shield,
  Globe,
  Database,
  Save,
} from "lucide-react";

import Button from "../../components/common/Button";
import useTheme from "../../hooks/useTheme";
import Toast from "../../components/common/Toast";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    autoAssignComplaints: true,
    maintenanceMode: false,
    language: "English",
  });

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    Toast.success("Settings saved successfully.");
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          System Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Configure application preferences and administrator options.
        </p>
      </div>

      {/* Appearance */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-3">
          {theme === "dark" ? (
            <Moon className="text-indigo-500" />
          ) : (
            <Sun className="text-yellow-500" />
          )}

          <h2 className="text-2xl font-bold">
            Appearance
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              Dark Mode
            </h3>

            <p className="text-sm text-gray-500">
              Switch between Light and Dark theme.
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className={`relative h-8 w-16 rounded-full transition ${
              theme === "dark"
                ? "bg-emerald-600"
                : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                theme === "dark"
                  ? "left-9"
                  : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Notifications */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-3">
          <Bell className="text-blue-600" />

          <h2 className="text-2xl font-bold">
            Notifications
          </h2>
        </div>

        <div className="space-y-5">
          <label className="flex items-center justify-between">
            <span>Email Notifications</span>

            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>SMS Notifications</span>

            <input
              type="checkbox"
              name="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleChange}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>Push Notifications</span>

            <input
              type="checkbox"
              name="pushNotifications"
              checked={settings.pushNotifications}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      {/* Administration */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-3">
          <Shield className="text-red-600" />

          <h2 className="text-2xl font-bold">
            Administration
          </h2>
        </div>

        <div className="space-y-5">
          <label className="flex items-center justify-between">
            <span>Auto Assign Complaints</span>

            <input
              type="checkbox"
              name="autoAssignComplaints"
              checked={settings.autoAssignComplaints}
              onChange={handleChange}
            />
          </label>

          <label className="flex items-center justify-between">
            <span>Maintenance Mode</span>

            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      {/* Language */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-3">
          <Globe className="text-green-600" />

          <h2 className="text-2xl font-bold">
            Language
          </h2>
        </div>

        <select
          name="language"
          value={settings.language}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
        >
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Database */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-3">
          <Database className="text-purple-600" />

          <h2 className="text-2xl font-bold">
            Database
          </h2>
        </div>

        <p className="mb-6 text-gray-500">
          Backup and restore application database.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline">
            Backup Database
          </Button>

          <Button variant="outline">
            Restore Database
          </Button>
        </div>
      </div>

      {/* Save */}

      <Button
        onClick={handleSave}
        className="flex items-center gap-2"
      >
        <Save size={18} />
        Save All Settings
      </Button>
    </div>
  );
};

export default Settings;