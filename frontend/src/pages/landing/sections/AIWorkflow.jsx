import {
  Upload,
  Brain,
  SearchCheck,
  Building2,
  BellRing,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    icon: <Upload size={34} />,
    title: "Image Upload",
    description:
      "Citizens capture and upload an image of the municipal issue along with its location and description.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Brain size={34} />,
    title: "AI Image Analysis",
    description:
      "The AI model analyzes the uploaded image using computer vision techniques to identify the problem.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <SearchCheck size={34} />,
    title: "Category Prediction",
    description:
      "The system predicts the complaint category with a confidence score and validates the result.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Building2 size={34} />,
    title: "Department Allocation",
    description:
      "The complaint is automatically assigned to the appropriate municipal department.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <BellRing size={34} />,
    title: "Real-Time Monitoring",
    description:
      "Officials process the complaint while citizens receive instant updates about every status change.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <CheckCircle2 size={34} />,
    title: "Issue Resolved",
    description:
      "The complaint is resolved, verified, and closed. Citizens can also provide service feedback.",
    color: "from-teal-500 to-emerald-600",
  },
];

const AIWorkflow = () => {
  return (
    <section
      id="ai-workflow"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            AI Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            How Artificial Intelligence Powers Vision Forge
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge leverages Artificial Intelligence and
            Computer Vision to automate complaint classification,
            reduce manual effort, and ensure complaints are routed
            to the correct department within seconds.
          </p>

        </div>

        {/* Workflow */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {workflow.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} p-4 text-white`}
              >
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>

              {index !== workflow.length - 1 && (
                <div className="mt-8 flex justify-center lg:hidden">
                  <ArrowDown
                    size={28}
                    className="text-emerald-600"
                  />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* AI Flow Diagram */}

        <div className="mt-24 rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-950">

          <h3 className="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-white">
            AI Processing Pipeline
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center">

            {[
              "📷 Image",
              "🧠 CNN Model",
              "🔍 Feature Extraction",
              "🏷️ Classification",
              "📊 Confidence Score",
              "🏢 Department",
              "✅ Resolution",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-emerald-100 px-5 py-3 font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  {item}
                </div>

                {index !== 6 && (
                  <span className="text-2xl text-emerald-600">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AIWorkflow;