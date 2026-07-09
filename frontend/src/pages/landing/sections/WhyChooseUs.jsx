import {
  Brain,
  ShieldCheck,
  Clock3,
  MapPinned,
  BellRing,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: <Brain size={36} />,
    title: "AI-Powered Automation",
    description:
      "Automatically classifies complaints using Artificial Intelligence, reducing manual work and improving accuracy.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Clock3 size={36} />,
    title: "Faster Resolution",
    description:
      "Smart routing and department allocation significantly reduce complaint resolution time.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure Platform",
    description:
      "Role-based authentication and secure data storage ensure complete privacy and reliability.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <MapPinned size={36} />,
    title: "Location-Based Reporting",
    description:
      "Capture the exact location of civic issues using GPS and interactive maps.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BellRing size={36} />,
    title: "Real-Time Notifications",
    description:
      "Citizens receive live updates whenever their complaint status changes.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Advanced Analytics",
    description:
      "Powerful dashboards help municipalities monitor performance and identify city-wide trends.",
    color: "from-yellow-500 to-orange-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Why Choose Vision Forge
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            A Smarter Way to Manage Civic Complaints
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge combines Artificial Intelligence,
            automation, and real-time communication to create a
            transparent, efficient, and citizen-friendly complaint
            management platform.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${reason.color} p-4 text-white transition-transform duration-300 group-hover:scale-110`}
              >
                {reason.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advantages */}

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-emerald-50 p-10 dark:bg-emerald-900/10">
            <h3 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Sparkles className="text-emerald-600" />
              Key Advantages
            </h3>

            <div className="space-y-5">
              {[
                "AI-powered complaint classification",
                "Automatic department assignment",
                "Transparent complaint tracking",
                "Secure citizen authentication",
                "Live notifications",
                "Modern responsive interface",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold">
              Building Better Communities
            </h3>

            <p className="mt-6 text-lg leading-8 text-emerald-100">
              Vision Forge empowers citizens to actively participate
              in improving their communities while enabling municipal
              authorities to deliver faster, smarter, and more
              transparent public services through Artificial
              Intelligence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-4xl font-bold">95%</h2>
                <p className="mt-2 text-emerald-100">
                  Resolution Rate
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">24/7</h2>
                <p className="mt-2 text-emerald-100">
                  Platform Access
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">12K+</h2>
                <p className="mt-2 text-emerald-100">
                  Issues Solved
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">8</h2>
                <p className="mt-2 text-emerald-100">
                  Departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;