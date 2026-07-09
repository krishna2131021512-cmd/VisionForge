import {
  Construction,
  Trash2,
  Droplets,
  Lightbulb,
  TrafficCone,
  Trees,
  Building2,
  AlertTriangle,
} from "lucide-react";

const categories = [
  {
    icon: <Construction size={36} />,
    title: "Road Damage",
    description:
      "Report potholes, damaged roads, broken pavements, and road maintenance issues.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Trash2 size={36} />,
    title: "Garbage & Waste",
    description:
      "Overflowing garbage bins, illegal dumping, and sanitation-related complaints.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Droplets size={36} />,
    title: "Water Supply",
    description:
      "Water leakage, pipeline damage, water shortage, and drainage problems.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Lightbulb size={36} />,
    title: "Street Lights",
    description:
      "Broken street lights, electrical failures, and public lighting issues.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <TrafficCone size={36} />,
    title: "Traffic",
    description:
      "Traffic signal failures, road safety concerns, and traffic management issues.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Trees size={36} />,
    title: "Parks & Gardens",
    description:
      "Damaged playgrounds, fallen trees, park maintenance, and public garden issues.",
    color: "from-lime-500 to-green-600",
  },
  {
    icon: <Building2 size={36} />,
    title: "Public Property",
    description:
      "Damaged public buildings, bus shelters, benches, and government infrastructure.",
    color: "from-slate-600 to-slate-800",
  },
  {
    icon: <AlertTriangle size={36} />,
    title: "Other Issues",
    description:
      "Any civic issue that doesn't belong to the predefined municipal categories.",
    color: "from-pink-500 to-rose-600",
  },
];

const ComplaintCategories = () => {
  return (
    <section
      id="complaint-categories"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Complaint Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Report Any Civic Issue Easily
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge supports multiple complaint categories.
            Our AI automatically identifies the category from the
            uploaded image and routes it to the appropriate
            department.
          </p>
        </div>

        {/* Categories */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white transition duration-300 group-hover:scale-110`}
              >
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            AI Automatically Detects Complaint Categories
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Simply upload an image of the issue. Vision Forge analyzes
            it using Artificial Intelligence, predicts the complaint
            category with high accuracy, and forwards it to the correct
            municipal department—saving time for both citizens and
            administrators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplaintCategories;