import {
  Brain,
  Camera,
  MapPinned,
  BellRing,
  BarChart3,
  ShieldCheck,
  Building2,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={36} />,
    title: "AI Complaint Detection",
    description:
      "Automatically classifies complaints using Artificial Intelligence and image recognition.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Camera size={36} />,
    title: "Image Upload",
    description:
      "Citizens can upload photos of civic issues for accurate identification and faster action.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <MapPinned size={36} />,
    title: "Live Location Tracking",
    description:
      "Capture complaint location automatically using GPS and interactive maps.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Building2 size={36} />,
    title: "Department Allocation",
    description:
      "Complaints are intelligently assigned to the correct municipal department.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BellRing size={36} />,
    title: "Real-Time Notifications",
    description:
      "Receive instant updates whenever your complaint status changes.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Analytics Dashboard",
    description:
      "Monitor complaint trends, department performance, and city-wide analytics.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure Platform",
    description:
      "Role-based authentication and secure data handling ensure user privacy.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: <Smartphone size={36} />,
    title: "Responsive Design",
    description:
      "Access Vision Forge seamlessly on desktops, tablets, and mobile devices.",
    color: "from-slate-700 to-slate-900",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Everything Needed for a Smarter Municipality
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge combines Artificial Intelligence,
            real-time monitoring, secure authentication, and
            powerful analytics to simplify complaint management
            for both citizens and municipal authorities.
          </p>

        </div>

        {/* Features Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950"
            >

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-4 text-white transition duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;