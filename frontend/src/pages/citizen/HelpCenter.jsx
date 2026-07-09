import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";
import Toast from "../../components/common/Toast";

const HelpCenter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Toast.success(
      "Your support request has been submitted successfully."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "How do I report a complaint?",
      answer:
        "Go to 'Report Issue', upload an image, select a category, enter the location and submit your complaint.",
    },
    {
      question: "How can I track my complaint?",
      answer:
        "Visit 'My Complaints' to view the latest status of every complaint.",
    },
    {
      question: "How long does resolution take?",
      answer:
        "Resolution depends on the issue severity and municipal department workload.",
    },
    {
      question: "Can I edit my complaint?",
      answer:
        "Yes, complaints can be edited until they are assigned to a department.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Help Center
        </h1>

        <p className="mt-2 text-gray-500">
          Need assistance? Find answers or contact our support
          team.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <Phone className="mb-4 text-emerald-600" size={40} />

          <h2 className="text-xl font-bold">
            Call Us
          </h2>

          <p className="mt-2 text-gray-500">
            +91 98765 43210
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <Mail className="mb-4 text-blue-600" size={40} />

          <h2 className="text-xl font-bold">
            Email
          </h2>

          <p className="mt-2 text-gray-500">
            support@visionforge.com
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <MessageCircle
            className="mb-4 text-purple-600"
            size={40}
          />

          <h2 className="text-xl font-bold">
            Live Chat
          </h2>

          <p className="mt-2 text-gray-500">
            Available 24 × 7
          </p>
        </div>

      </div>

      {/* FAQs */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

        <div className="mb-8 flex items-center gap-3">

          <HelpCircle
            className="text-emerald-600"
            size={30}
          />

          <h2 className="text-2xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700"
            >
              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-2 text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Contact Form */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

        <h2 className="mb-6 text-2xl font-bold">
          Contact Support
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
          />

          <TextArea
            label="Message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your issue..."
          />

          <Button
            type="submit"
            className="w-full"
          >
            Submit Request
          </Button>

        </form>

      </div>
    </div>
  );
};

export default HelpCenter;