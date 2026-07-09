import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is Vision Forge?",
    answer:
      "Vision Forge is an AI-powered Smart Municipal Complaint Management System that enables citizens to report civic issues while helping municipal authorities manage and resolve complaints efficiently.",
  },
  {
    question: "How do I report a complaint?",
    answer:
      "Simply create an account, log in, navigate to the 'Report Issue' page, upload an image, provide the location and description, and submit your complaint.",
  },
  {
    question: "How does AI help in complaint management?",
    answer:
      "The AI analyzes the uploaded image, predicts the complaint category, and automatically assigns it to the appropriate municipal department for faster resolution.",
  },
  {
    question: "Can I track the status of my complaint?",
    answer:
      "Yes. Every complaint includes real-time status updates such as Pending, Assigned, In Progress, and Resolved, which can be viewed from your dashboard.",
  },
  {
    question: "Will I receive notifications?",
    answer:
      "Yes. Vision Forge sends instant notifications whenever your complaint status changes or additional information is required.",
  },
  {
    question: "Which departments are available?",
    answer:
      "Vision Forge currently supports Road, Water Supply, Sanitation, Electricity, Drainage, Traffic, Parks & Gardens, and Public Buildings departments.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. Vision Forge uses secure authentication and role-based access control to protect user information and complaint data.",
  },
  {
    question: "Can I upload multiple images?",
    answer:
      "Yes. Citizens can upload one or more images to provide better context and improve AI-based complaint classification.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Got Questions? We've Got Answers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Find answers to the most common questions about
            Vision Forge and how our AI-powered complaint
            management system works.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mx-auto max-w-4xl space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">

                  <HelpCircle
                    className="text-emerald-600"
                    size={24}
                  />

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                </div>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {activeIndex === index && (
                <div className="border-t border-slate-200 px-6 pb-6 pt-4 dark:border-slate-700">

                  <p className="leading-8 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>

                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Our support team is always ready to help you. Feel free
            to contact us for any additional questions or assistance
            regarding Vision Forge.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:scale-105">
            Contact Support
          </button>

        </div>

      </div>
    </section>
  );
};

export default FAQ;