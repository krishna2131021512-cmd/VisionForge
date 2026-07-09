import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";

const Contact = () => {
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

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have questions, suggestions, or need assistance with
            Vision Forge? Reach out to us and our team will get back
            to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}

          <div className="space-y-8">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg dark:bg-slate-900">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">
                  <Mail size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Email
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    support@visionforge.com
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30">
                  <Phone size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Phone
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-orange-100 p-4 text-orange-600 dark:bg-orange-900/30">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Office
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    Puducherry Municipal Office,
                    Puducherry, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-purple-100 p-4 text-purple-600 dark:bg-purple-900/30">
                  <Clock size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Working Hours
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    Monday - Friday | 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}

            <div className="flex h-72 items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-600 text-center text-white shadow-xl">
              <div>
                <MapPin
                  className="mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-2xl font-bold">
                  Google Maps
                </h3>
                <p className="mt-2">
                  Map Integration Here
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-slate-50 p-10 shadow-xl dark:bg-slate-900"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                <Send size={20} />

                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;