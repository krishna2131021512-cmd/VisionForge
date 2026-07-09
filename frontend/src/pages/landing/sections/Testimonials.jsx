import {
  Quote,
  Star,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Citizen",
    location: "Puducherry",
    rating: 5,
    feedback:
      "I reported a large pothole using Vision Forge. The complaint was automatically assigned to the Road Department, and the issue was resolved within two days. The entire process was smooth and transparent.",
  },
  {
    name: "Priya Sharma",
    role: "Citizen",
    location: "Lawspet",
    rating: 5,
    feedback:
      "The AI automatically detected my complaint category from the uploaded image. I received regular notifications until the issue was completely resolved. Excellent platform!",
  },
  {
    name: "Rajesh Kumar",
    role: "Road Department Officer",
    location: "Municipal Office",
    rating: 5,
    feedback:
      "Vision Forge has greatly reduced manual complaint sorting. AI categorization allows our department to respond faster and improve public service efficiency.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-24 dark:bg-slate-900"
    >
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            What Our Users Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Hear from citizens and municipal officials who use
            Vision Forge to improve public services through
            Artificial Intelligence.
          </p>
        </div>

        {/* Testimonial Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950"
            >
              <Quote
                className="mb-6 text-emerald-600"
                size={40}
              />

              <p className="leading-8 text-slate-600 dark:text-slate-400">
                "{testimonial.feedback}"
              </p>

              <div className="mt-6 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>

                      <BadgeCheck
                        size={18}
                        className="text-blue-500"
                      />
                    </div>

                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin size={14} />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Trusted by Citizens & Municipal Authorities
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Vision Forge is transforming the way civic complaints are
            managed by combining Artificial Intelligence, transparency,
            and real-time communication to build smarter cities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;