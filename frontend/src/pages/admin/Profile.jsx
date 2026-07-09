import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Shield,
  MapPin,
  Calendar,
  Camera,
  Save,
} from "lucide-react";

import Avatar from "../../components/ui/Avatar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Badge from "../../components/ui/Badge";
import Toast from "../../components/common/Toast";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Municipal Administrator",
    email: "admin@visionforge.com",
    phone: "+91 9876543210",
    designation: "Municipal Commissioner",
    department: "Municipal Administration",
    location: "Puducherry",
    joined: "15 January 2025",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    Toast.success("Profile updated successfully.");
  };

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Administrator Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your administrator profile and account settings.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Profile Card */}

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

          <div className="flex flex-col items-center">

            <div className="relative">

              <Avatar
                name={user.name}
                size="xl"
                status="online"
              />

              <button className="absolute bottom-0 right-0 rounded-full bg-emerald-600 p-2 text-white hover:bg-emerald-700">
                <Camera size={16} />
              </button>

            </div>

            <h2 className="mt-6 text-2xl font-bold">
              {user.name}
            </h2>

            <Badge variant="success">
              Administrator
            </Badge>

            <div className="mt-8 w-full space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" size={18} />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={18} />
                <span>{user.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="text-red-600" size={18} />
                <span>{user.designation}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-purple-600" size={18} />
                <span>{user.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-orange-600" size={18} />
                <span>Joined {user.joined}</span>
              </div>

            </div>

          </div>

        </div>

        {/* Edit Form */}

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900 lg:col-span-2">

          <h2 className="mb-8 text-2xl font-bold">
            Edit Profile
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <Input
              label="Full Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              icon={<User size={18} />}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              icon={<Mail size={18} />}
            />

            <Input
              label="Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              icon={<Phone size={18} />}
            />

            <Input
              label="Designation"
              name="designation"
              value={user.designation}
              onChange={handleChange}
              icon={<Shield size={18} />}
            />

            <Input
              label="Department"
              name="department"
              value={user.department}
              onChange={handleChange}
            />

            <Input
              label="Location"
              name="location"
              value={user.location}
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