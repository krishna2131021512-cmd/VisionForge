import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            We'd Love To Hear From You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have questions, suggestions, or feedback? Get in touch with us.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-950">
                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">
                  <Mail size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Email
                  </h4>

                  <p className="mt-2 text-gray-500">
                    support@visionforge.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-950">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30">
                  <Phone size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h4>

                  <p className="mt-2 text-gray-500">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-950">
                <div className="rounded-2xl bg-purple-100 p-4 text-purple-600 dark:bg-purple-900/30">
                  <MapPin size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Address
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Puducherry, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-950">
                <div className="rounded-2xl bg-orange-100 p-4 text-orange-600 dark:bg-orange-900/30">
                  <Clock size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Working Hours
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-950"
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Send a Message
            </h3>

            <form className="space-y-5">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />

              <Input
                label="Subject"
                placeholder="Enter subject"
              />

              <TextArea
                label="Message"
                rows={6}
                placeholder="Write your message..."
              />

              <Button
                type="submit"
                className="w-full"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;