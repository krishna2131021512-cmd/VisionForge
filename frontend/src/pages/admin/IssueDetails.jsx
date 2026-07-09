import {
  Calendar,
  Clock,
  MapPin,
  User,
  Camera,
  CheckCircle2,
  Building2,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";
import MapPlaceholder from "../../components/dashboard/MapPlaceholder";

const IssueDetails = () => {
  const issue = {
    id: "VF-2026-00124",
    title: "Large Pothole Near Anna Salai Bus Stop",
    category: "Road Damage",
    priority: "High",
    status: "In Progress",
    citizen: "John Doe",
    department: "Road Department",
    reportedDate: "08 July 2026",
    updatedDate: "10 July 2026",
    location: "Anna Salai, Puducherry",
    latitude: "11.9416",
    longitude: "79.8083",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
    description:
      "A large pothole has developed near the Anna Salai Bus Stop causing frequent traffic congestion and increasing the possibility of accidents, especially during rainy weather.",
  };

  const timeline = [
    {
      id: 1,
      type: "reported",
      title: "Complaint Submitted",
      description: "Citizen submitted the complaint.",
      location: "Anna Salai",
      time: "08 Jul 2026",
    },
    {
      id: 2,
      type: "assigned",
      title: "Assigned to Road Department",
      description: "Complaint forwarded automatically.",
      location: "Municipal Office",
      time: "09 Jul 2026",
    },
    {
      id: 3,
      type: "progress",
      title: "Repair Work Started",
      description: "Municipal workers reached the site.",
      location: "Anna Salai",
      time: "10 Jul 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={issue.image}
            alt={issue.title}
            className="h-96 w-full rounded-3xl object-cover"
          />

          <div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">
                {issue.category}
              </Badge>

              <Badge variant="warning">
                {issue.priority}
              </Badge>

              <Badge variant="info">
                {issue.status}
              </Badge>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              {issue.title}
            </h1>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              {issue.description}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-emerald-600" />
                <span>{issue.id}</span>
              </div>

              <div className="flex items-center gap-3">
                <User className="text-blue-600" />
                <span>{issue.citizen}</span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="text-purple-600" />
                <span>{issue.department}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <span>{issue.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-orange-600" />
                <span>{issue.reportedDate}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-cyan-600" />
                <span>{issue.updatedDate}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                Update Status
              </Button>

              <Button variant="outline">
                Assign Department
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}

      <MapPlaceholder
        title="Complaint Location"
        location={issue.location}
        latitude={issue.latitude}
        longitude={issue.longitude}
      />

      {/* Timeline */}

      <ActivityTimeline
        title="Issue Timeline"
        activities={timeline}
      />

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <Camera
            size={34}
            className="text-emerald-600"
          />

          <h2 className="mt-5 text-xl font-bold">
            Evidence
          </h2>

          <p className="mt-3 text-gray-500">
            Citizen uploaded an image while reporting
            the issue for verification.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <AlertTriangle
            size={34}
            className="text-orange-500"
          />

          <h2 className="mt-5 text-xl font-bold">
            Priority Level
          </h2>

          <p className="mt-3 text-gray-500">
            High Priority because it directly affects
            public safety and traffic movement.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <CheckCircle2
            size={34}
            className="text-green-600"
          />

          <h2 className="mt-5 text-xl font-bold">
            Current Status
          </h2>

          <p className="mt-3 text-gray-500">
            Repair work has started and is expected to
            complete within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;