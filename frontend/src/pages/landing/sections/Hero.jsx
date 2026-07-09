import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  MapPinned,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container-custom relative py-24 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">

              <Sparkles size={18} />

              AI Powered Smart City Platform

            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-7xl">

              Building
              <span className="text-emerald-600">
                {" "}Smarter Cities
              </span>

              <br />

              Through Artificial Intelligence

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">

              Vision Forge enables citizens to report municipal
              issues instantly using AI-powered image detection,
              real-time complaint tracking, smart department
              allocation, and transparent resolution monitoring.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Get Started

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Login
              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className="text-emerald-600"
                  size={24}
                />

                <span className="font-medium">
                  AI Complaint Detection
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className="text-emerald-600"
                  size={24}
                />

                <span className="font-medium">
                  Live Complaint Tracking
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className="text-emerald-600"
                  size={24}
                />

                <span className="font-medium">
                  Smart Department Allocation
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className="text-emerald-600"
                  size={24}
                />

                <span className="font-medium">
                  Secure Authentication
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

              <div className="mb-8 flex items-center justify-between">

                <h3 className="text-2xl font-bold">

                  Smart Complaint Dashboard

                </h3>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                  Online

                </div>

              </div>

              <div className="space-y-6">

                <div className="rounded-2xl bg-emerald-50 p-5 dark:bg-slate-800">

                  <div className="flex items-center gap-4">

                    <ShieldCheck
                      className="text-emerald-600"
                      size={36}
                    />

                    <div>

                      <h4 className="font-semibold">

                        AI Classified

                      </h4>

                      <p className="text-sm text-slate-500">

                        Road Damage detected with 98% confidence

                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-blue-50 p-5 dark:bg-slate-800">

                  <div className="flex items-center gap-4">

                    <MapPinned
                      className="text-blue-600"
                      size={36}
                    />

                    <div>

                      <h4 className="font-semibold">

                        Live Location

                      </h4>

                      <p className="text-sm text-slate-500">

                        Anna Salai, Puducherry

                      </p>

                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-800">

                    <h2 className="text-3xl font-bold text-emerald-600">

                      12K+

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                      Complaints Solved

                    </p>

                  </div>

                  <div className="rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-800">

                    <h2 className="text-3xl font-bold text-blue-600">

                      95%

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                      Resolution Rate

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;