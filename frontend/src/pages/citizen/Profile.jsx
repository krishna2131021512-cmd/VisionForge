import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Camera,
  Save,
} from "lucide-react";

import Avatar from "../../components/ui/Avatar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Toast from "../../components/common/Toast";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "Puducherry, India",
    joined: "January 2026",
  });

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    Toast.success("Profile updated successfully.");
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Card */}
        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar
                name={profile.name}
                size="xl"
                status="online"
              />

              <button className="absolute bottom-0 right-0 rounded-full bg-emerald-600 p-2 text-white shadow-lg hover:bg-emerald-700">
                <Camera size={18} />
              </button>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              {profile.name}
            </h2>

            <p className="text-gray-500">
              Citizen
            </p>

            <div className="mt-8 w-full space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" size={18} />
                <span>{profile.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={18} />
                <span>{profile.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" size={18} />
                <span>{profile.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-purple-600" size={18} />
                <span>Joined {profile.joined}</span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900 lg:col-span-2">
          <div className="mb-8 flex items-center gap-3">
            <Edit className="text-emerald-600" />

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Profile
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <Input
              label="Full Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              icon={<User size={18} />}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              icon={<Mail size={18} />}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              icon={<Phone size={18} />}
            />

            <Input
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              icon={<MapPin size={18} />}
            />

          </div>

          <div className="mt-8">
            <Button
              onClick={handleSave}
              className="flex items-center gap-2"
            >
              <Save size={18} />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;