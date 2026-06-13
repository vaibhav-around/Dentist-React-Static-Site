import React from "react";

const Services = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 scroll-mt-24" id="services">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-600 font-semibold">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            High Quality Dental Care
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a full range of dental treatments using the latest
            technology for your comfort and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card */}
          <div data-aos="fade-up" className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40">
            <div className="text-4xl mb-4">🦷</div>

            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Teeth Cleaning
            </h3>

            <p className="text-gray-600 mt-3">
              Professional cleaning to maintain healthy teeth and gums.
            </p>

            <div className="mt-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>
          </div>

          {/* Card */}
          <div data-aos="fade-up" data-aos-duration="1200" className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40">
            <div className="text-4xl mb-4">✨</div>

            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Teeth Whitening
            </h3>

            <p className="text-gray-600 mt-3">
              Brighten your smile with safe and advanced whitening solutions.
            </p>

            <div className="mt-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>
          </div>

          {/* Card */}
          <div data-aos="fade-up" data-aos-duration="1500" className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40">
            <div className="text-4xl mb-4">🦴</div>

            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              Dental Implants
            </h3>

            <p className="text-gray-600 mt-3">
              Permanent and natural-looking solution for missing teeth.
            </p>

            <div className="mt-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
