import {
  FileText,
  CheckCircle2,
  Clock3,
  Building2,
} from "lucide-react";

const stats = [
  {
    title: "Total Complaints",
    value: "12,584",
    description: "Complaints registered across the city",
    icon: <FileText size={34} />,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Resolved Issues",
    value: "11,945",
    description: "Successfully resolved complaints",
    icon: <CheckCircle2 size={34} />,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Pending Cases",
    value: "639",
    description: "Currently under processing",
    icon: <Clock3 size={34} />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Departments",
    value: "8",
    description: "Municipal departments connected",
    icon: <Building2 size={34} />,
    color: "from-purple-500 to-indigo-600",
  },
];

const Statistics = () => {
  return (
    <section
      id="statistics"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Improving Cities Through Data
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge provides municipalities with powerful
            insights into complaint trends, department performance,
            and overall public service efficiency.
          </p>
        </div>

        {/* Statistics Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-4 text-white`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-slate-900 dark:text-white">
                {item.value}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h4>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statistics Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-white shadow-xl">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold">95%</h3>
              <p className="mt-2 text-emerald-100">
                Resolution Rate
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">15K+</h3>
              <p className="mt-2 text-emerald-100">
                Registered Citizens
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">24/7</h3>
              <p className="mt-2 text-emerald-100">
                Platform Availability
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">98%</h3>
              <p className="mt-2 text-emerald-100">
                AI Prediction Accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;