import { Eye, Target, Lightbulb, Globe2 } from "lucide-react";

const Vision = () => {
  return (
    <section
      id="vision"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">

        {/* Section Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            Vision & Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Creating Smarter Cities Through Innovation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge aims to revolutionize municipal governance
            using Artificial Intelligence, enabling transparent,
            efficient, and citizen-friendly public service management.
          </p>

        </div>

        {/* Vision & Mission Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Vision */}

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950">

            <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">

              <Eye size={36} />

            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              To build intelligent, transparent, and sustainable
              smart cities where every citizen can easily report
              civic issues and receive timely resolutions through
              AI-powered municipal governance.
            </p>

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3">
                <Globe2 className="text-emerald-600" size={22} />
                Smart City Development
              </li>

              <li className="flex items-center gap-3">
                <Globe2 className="text-emerald-600" size={22} />
                Transparent Governance
              </li>

              <li className="flex items-center gap-3">
                <Globe2 className="text-emerald-600" size={22} />
                Citizen Empowerment
              </li>

            </ul>

          </div>

          {/* Mission */}

          <div className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950">

            <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30">

              <Target size={36} />

            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              Our mission is to leverage Artificial Intelligence,
              automation, and data-driven insights to improve
              municipal complaint management while enhancing
              public trust and service efficiency.
            </p>

            <ul className="mt-8 space-y-4">

              <li className="flex items-center gap-3">
                <Lightbulb className="text-blue-600" size={22} />
                AI-Based Complaint Classification
              </li>

              <li className="flex items-center gap-3">
                <Lightbulb className="text-blue-600" size={22} />
                Faster Complaint Resolution
              </li>

              <li className="flex items-center gap-3">
                <Lightbulb className="text-blue-600" size={22} />
                Better Public Services
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Quote */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            "Building Better Communities Through Technology"
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Vision Forge connects citizens and municipalities on a
            single intelligent platform, ensuring every complaint is
            heard, analyzed, assigned, and resolved with maximum
            efficiency and complete transparency.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Vision;