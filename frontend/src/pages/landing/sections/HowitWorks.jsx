import {
  Camera,
  Brain,
  Building2,
  Wrench,
  BellRing,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Camera size={34} />,
    title: "Report the Issue",
    description:
      "Citizens report civic issues by filling out a simple form, uploading an image, and sharing the location.",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "02",
    icon: <Brain size={34} />,
    title: "AI Analysis",
    description:
      "Vision Forge uses Artificial Intelligence to analyze the uploaded image and automatically identify the complaint category.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "03",
    icon: <Building2 size={34} />,
    title: "Department Assignment",
    description:
      "Based on the AI prediction, the complaint is automatically assigned to the appropriate municipal department.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "04",
    icon: <Wrench size={34} />,
    title: "Issue Resolution",
    description:
      "Municipal officials inspect the complaint, perform the required work, and update the complaint status.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    icon: <BellRing size={34} />,
    title: "Real-Time Updates",
    description:
      "Citizens receive instant notifications whenever the complaint status changes.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "06",
    icon: <CheckCircle2 size={34} />,
    title: "Complaint Closed",
    description:
      "Once the issue is resolved, the citizen can verify the work and provide feedback on the service.",
    color: "from-teal-500 to-emerald-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Smart Complaint Resolution in 6 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge streamlines municipal complaint management
            through Artificial Intelligence, automation, and
            transparent communication between citizens and
            authorities.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Vertical Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-emerald-200 lg:block"></div>

          <div className="space-y-14">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Card */}

                <div className="w-full lg:w-5/12">
                  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                    <div
                      className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} p-4 text-white`}
                    >
                      {step.icon}
                    </div>

                    <span className="mt-6 block text-sm font-bold text-emerald-600">
                      STEP {step.id}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Circle */}

                <div className="z-10 hidden h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-emerald-600 text-xl font-bold text-white shadow-lg lg:flex">
                  {step.id}
                </div>

                {/* Empty Space */}

                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Faster Reporting. Smarter Resolution.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Vision Forge ensures every complaint is intelligently
            classified, assigned to the correct department, and
            resolved efficiently while keeping citizens informed at
            every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;