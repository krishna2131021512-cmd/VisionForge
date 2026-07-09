import {
  Building2,
  Brain,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "AI-Powered Classification",
    description:
      "Automatically identifies complaint categories using image recognition and AI.",
  },
  {
    icon: <Users size={32} />,
    title: "Citizen-Centric",
    description:
      "Provides a simple and transparent platform for citizens to report and track issues.",
  },
  {
    icon: <Building2 size={32} />,
    title: "Municipal Management",
    description:
      "Helps municipalities assign, monitor, and resolve complaints efficiently.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure & Reliable",
    description:
      "Ensures secure authentication and safe management of complaint information.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            About Vision Forge
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Transforming Municipal Services with Artificial Intelligence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge is an AI-powered Smart Municipal Complaint
            Management System designed to bridge the gap between
            citizens and municipal authorities. Citizens can report
            civic issues with images, while AI automatically classifies
            complaints and forwards them to the appropriate department,
            making the entire process faster, smarter, and transparent.
          </p>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Our mission is to build smarter cities by leveraging
              Artificial Intelligence, enabling faster complaint
              resolution, improved public services, and enhanced
              communication between citizens and municipalities.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "AI-Based Complaint Detection",
                "Real-Time Complaint Tracking",
                "Automatic Department Assignment",
                "Transparent Resolution Process",
                "Analytics & Performance Dashboard",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-emerald-600"
                    size={24}
                  />

                  <span className="text-lg font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">
                  {feature.icon}
                </div>

                <h4 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h4>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;