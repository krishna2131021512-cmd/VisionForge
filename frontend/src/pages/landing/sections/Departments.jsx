import {
  Building2,
  Truck,
  Droplets,
  Trash2,
  Lightbulb,
  TrafficCone,
  Trees,
  Landmark,
} from "lucide-react";

const departments = [
  {
    icon: <Truck size={36} />,
    name: "Road Department",
    description:
      "Handles road maintenance, pothole repairs, road widening, and infrastructure development.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Trash2 size={36} />,
    name: "Sanitation Department",
    description:
      "Responsible for garbage collection, waste management, and city cleanliness.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Droplets size={36} />,
    name: "Water Supply",
    description:
      "Manages water pipelines, leak repairs, drainage issues, and water distribution.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Lightbulb size={36} />,
    name: "Electricity Department",
    description:
      "Maintains street lights, electrical poles, and public electrical infrastructure.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <TrafficCone size={36} />,
    name: "Traffic Department",
    description:
      "Maintains traffic signals, road safety measures, and public traffic management.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Trees size={36} />,
    name: "Parks & Gardens",
    description:
      "Maintains parks, public gardens, playgrounds, and green spaces across the city.",
    color: "from-lime-500 to-green-600",
  },
  {
    icon: <Building2 size={36} />,
    name: "Public Buildings",
    description:
      "Responsible for municipal buildings, public facilities, and civic infrastructure.",
    color: "from-slate-600 to-slate-800",
  },
  {
    icon: <Landmark size={36} />,
    name: "Municipal Administration",
    description:
      "Coordinates all municipal departments and ensures timely complaint resolution.",
    color: "from-pink-500 to-rose-600",
  },
];

const Departments = () => {
  return (
    <section
      id="departments"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Municipal Departments
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Connected Government Departments
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge intelligently routes every complaint to the
            appropriate municipal department, ensuring faster
            resolution and efficient public service management.
          </p>
        </div>

        {/* Department Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${department.color} p-4 text-white transition duration-300 group-hover:scale-110`}
              >
                {department.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {department.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {department.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Smart Department Allocation with AI
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Our Artificial Intelligence engine automatically analyzes
            complaints and assigns them to the correct municipal
            department, reducing manual work and significantly
            improving response times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Departments;