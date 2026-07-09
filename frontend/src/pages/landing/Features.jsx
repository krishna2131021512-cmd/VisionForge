import { motion } from "framer-motion";
import {
  MapPinned,
  BrainCircuit,
  BellRing,
  Camera,
  Building2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <MapPinned size={32} />,
    title: "Geo-Tagged Reporting",
    description:
      "Report civic issues with GPS location for accurate identification and faster resolution.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Camera size={32} />,
    title: "Image Upload",
    description:
      "Upload photos of potholes, garbage, drainage problems, and other civic issues.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Issue Classification",
    description:
      "Artificial Intelligence automatically identifies the complaint category and routes it to the correct department.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: <Building2 size={32} />,
    title: "Department Assignment",
    description:
      "Complaints are instantly forwarded to the responsible municipal department for action.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BellRing size={32} />,
    title: "Real-Time Notifications",
    description:
      "Receive instant updates whenever your complaint status changes.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Transparent Tracking",
    description:
      "Track every stage of your complaint from submission to resolution with complete transparency.",
    color: "from-teal-500 to-emerald-600",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Everything Needed For Smart Civic Governance
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Vision Forge combines Artificial Intelligence,
            location intelligence, and real-time communication
            into one powerful platform for citizens and
            municipal authorities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-7 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;