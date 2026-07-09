import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPinned,
  BrainCircuit,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: <MapPinned size={30} />,
    title: "Geo-tagged Reporting",
    description:
      "Citizens can report civic issues with precise GPS location and supporting images.",
  },
  {
    icon: <BrainCircuit size={30} />,
    title: "AI Classification",
    description:
      "Artificial Intelligence automatically categorizes complaints and routes them to the correct municipal department.",
  },
  {
    icon: <Building2 size={30} />,
    title: "Municipal Dashboard",
    description:
      "Authorities receive complaints, monitor progress, assign tasks, and resolve issues efficiently.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Transparent Tracking",
    description:
      "Citizens receive live updates and can track the status of every complaint from submission to resolution.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 dark:bg-gray-950"
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
            About Vision Forge
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Building Smarter Cities Through AI &
            Citizen Collaboration
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Vision Forge is an AI-powered Smart Civic Issue
            Reporting Platform that bridges the gap between
            citizens and municipal authorities. Citizens can
            instantly report civic problems, while AI
            automatically classifies and routes complaints to
            the correct department for faster resolution.
          </p>
        </motion.div>

        {/* Two Column */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
              alt="Smart City"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Vision Forge?
            </h3>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              Traditional complaint systems are slow,
              unorganized, and lack transparency. Vision Forge
              transforms civic governance by leveraging
              Artificial Intelligence, location tracking, and
              real-time notifications to make issue reporting
              fast, transparent, and efficient.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 p-3 text-white">
                    {feature.icon}
                  </div>

                  <h4 className="mb-3 text-lg font-bold text-gray-800 dark:text-white">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;