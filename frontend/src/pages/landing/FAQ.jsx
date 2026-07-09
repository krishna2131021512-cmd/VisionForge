import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Vision Forge?",
    answer:
      "Vision Forge is an AI-powered Smart Civic Issue Reporting and Resolution Platform that enables citizens to report civic issues and allows municipal authorities to manage and resolve them efficiently.",
  },
  {
    question: "How do I report a complaint?",
    answer:
      "Simply log in as a citizen, click 'Report Issue', upload an image, select the issue category, provide the location and description, then submit your complaint.",
  },
  {
    question: "How does AI help in this platform?",
    answer:
      "AI automatically analyzes uploaded images, classifies the complaint category, and routes it to the appropriate municipal department for faster processing.",
  },
  {
    question: "Can I track my complaint status?",
    answer:
      "Yes. Every complaint has a unique tracking status. You can monitor whether it is Pending, Assigned, In Progress, or Resolved in real time.",
  },
  {
    question: "Who can access the Municipal Dashboard?",
    answer:
      "Only authorized municipal administrators can access the dashboard to review complaints, assign departments, update statuses, and generate reports.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. Vision Forge securely stores user information and only authorized personnel can access complaint details when necessary.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <motion.div
      layout
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="border-t border-gray-200 px-6 py-5 dark:border-gray-700">
              <p className="leading-7 text-gray-600 dark:text-gray-400">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Got Questions? We've Got Answers.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Find answers to the most commonly asked questions
            about Vision Forge and how the platform works.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index
                    ? -1
                    : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;