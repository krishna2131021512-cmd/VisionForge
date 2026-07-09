import {
  Users,
  Building2,
  Brain,
  Clock3,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const citizenBenefits = [
  "Report complaints in under a minute",
  "Upload images with GPS location",
  "Track complaint status in real-time",
  "Receive instant notifications",
];

const authorityBenefits = [
  "AI-powered complaint categorization",
  "Automatic department assignment",
  "Performance analytics dashboard",
  "Transparent complaint management",
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Benefits for Citizens & Municipal Authorities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Vision Forge creates a win-win ecosystem where citizens
            enjoy faster complaint resolution while municipalities
            improve operational efficiency using Artificial
            Intelligence.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Citizens */}

          <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-950">
            <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">
              <Users size={36} />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              For Citizens
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Easily report civic issues, monitor complaint progress,
              and stay informed throughout the resolution process.
            </p>

            <div className="mt-8 space-y-5">
              {citizenBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Authorities */}

          <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-950">
            <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30">
              <Building2 size={36} />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              For Municipal Authorities
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Automate complaint handling, improve departmental
              coordination, and monitor city-wide performance using
              AI-powered insights.
            </p>

            <div className="mt-8 space-y-5">
              {authorityBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-blue-600"
                    size={22}
                  />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-slate-950">
            <Brain
              className="mx-auto text-emerald-600"
              size={40}
            />
            <h4 className="mt-5 text-xl font-bold">
              AI Powered
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Smart image recognition and complaint classification.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-slate-950">
            <Clock3
              className="mx-auto text-blue-600"
              size={40}
            />
            <h4 className="mt-5 text-xl font-bold">
              Faster Resolution
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Reduce manual processing with automated workflows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-slate-950">
            <ShieldCheck
              className="mx-auto text-orange-500"
              size={40}
            />
            <h4 className="mt-5 text-xl font-bold">
              Secure Platform
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Protected user authentication and secure complaint data.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-slate-950">
            <BarChart3
              className="mx-auto text-purple-600"
              size={40}
            />
            <h4 className="mt-5 text-xl font-bold">
              Smart Analytics
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Visualize trends and monitor department performance.
            </p>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-4xl font-bold">
            Making Every Complaint Count
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Vision Forge combines Artificial Intelligence, automation,
            and transparency to build smarter cities where citizens and
            municipalities work together for better public services.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:scale-105">
            Explore Vision Forge

            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;