import {
  Calendar,
  Clock,
  MapPin,
  User,
  Camera,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";
import MapPlaceholder from "../../components/dashboard/MapPlaceholder";

const IssueDetails = () => {
  const issue = {
    id: "VF-2026-00125",
    title: "Large Pothole Near Anna Salai Bus Stand",
    category: "Road Damage",
    priority: "High",
    status: "In Progress",
    reportedBy: "John Doe",
    reportedDate: "08 July 2026",
    updatedDate: "10 July 2026",
    department: "Road Department",
    location: "Anna Salai, Puducherry",
    latitude: "11.9416",
    longitude: "79.8083",
    description:
      "A large pothole has formed near the Anna Salai Bus Stand causing severe traffic congestion and increasing the risk of accidents, especially during rainy days.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
  };

  const activities = [
    {
      id: 1,
      type: "reported",
      title: "Complaint Submitted",
      description:
        "Citizen reported the pothole.",
      location: "Anna Salai",
      time: "08 Jul 2026",
    },
    {
      id: 2,
      type: "assigned",
      title: "Assigned to Road Department",
      description:
        "Complaint assigned to municipal engineers.",
      location: "Puducherry",
      time: "09 Jul 2026",
    },
    {
      id: 3,
      type: "progress",
      title: "Repair Work Started",
      description:
        "Repair team reached the location.",
      location: "Anna Salai",
      time: "10 Jul 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

        <div className="flex flex-col gap-6 lg:flex-row">

          {/* Image */}

          <img
            src={issue.image}
            alt={issue.title}
            className="h-80 w-full rounded-3xl object-cover lg:w-[450px]"
          />

          {/* Details */}

          <div className="flex-1">

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

            <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
              {issue.title}
            </h1>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              {issue.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="flex items-center gap-3">
                <ClipboardList className="text-emerald-600" />
                <span>ID : {issue.id}</span>
              </div>

              <div className="flex items-center gap-3">
                <User className="text-blue-600" />
                <span>{issue.reportedBy}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-orange-600" />
                <span>{issue.reportedDate}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-purple-600" />
                <span>{issue.updatedDate}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <span>{issue.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                <span>{issue.department}</span>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button>
                Update Status
              </Button>

              <Button variant="outline">
                Download Report
              </Button>

            </div>

          </div>

        </div>

      </div>

      {/* Map */}

      <MapPlaceholder
        location={issue.location}
        latitude={issue.latitude}
        longitude={issue.longitude}
      />

      {/* Timeline */}

      <ActivityTimeline
        title="Complaint Timeline"
        activities={activities}
      />

      {/* Extra Information */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">

          <Camera
            size={35}
            className="text-emerald-600"
          />

          <h2 className="mt-5 text-xl font-bold">
            Evidence
          </h2>

          <p className="mt-3 text-gray-500">
            Citizen uploaded one image as proof of
            the reported issue.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">

          <AlertTriangle
            size={35}
            className="text-orange-500"
          />

          <h2 className="mt-5 text-xl font-bold">
            Priority
          </h2>

          <p className="mt-3 text-gray-500">
            High priority because it affects heavy
            public traffic and safety.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">

          <CheckCircle2
            size={35}
            className="text-blue-600"
          />

          <h2 className="mt-5 text-xl font-bold">
            Current Status
          </h2>

          <p className="mt-3 text-gray-500">
            Municipal workers are currently repairing
            the road.
          </p>

        </div>

      </div>
    </div>
  );
};

export default IssueDetails;