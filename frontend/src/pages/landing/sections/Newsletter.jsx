import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="bg-slate-100 py-24 dark:bg-slate-900">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-2xl dark:bg-slate-950 lg:p-16">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <div className="mb-6 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Newsletter
              </div>

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
                Stay Updated with Vision Forge
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Subscribe to receive updates about new platform
                features, AI improvements, smart city initiatives,
                and municipal announcements directly in your inbox.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />
                  <span>Platform Updates</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />
                  <span>AI Feature Announcements</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />
                  <span>Municipality News</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={22}
                  />
                  <span>No Spam. Unsubscribe Anytime.</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-blue-600 p-8 text-white shadow-xl">

                <Mail size={60} className="mb-6" />

                <h3 className="text-3xl font-bold">
                  Subscribe Now
                </h3>

                <p className="mt-4 text-emerald-100">
                  Join thousands of citizens who receive the latest
                  updates from Vision Forge.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full rounded-xl px-5 py-4 text-slate-900 outline-none"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 font-semibold text-emerald-700 transition duration-300 hover:scale-105"
                  >
                    <Send size={20} />

                    Subscribe
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;