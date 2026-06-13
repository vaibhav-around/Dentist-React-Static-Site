import React from "react";
import { lazy } from "react";
const Services = lazy(() => import("./Services"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
function Home() {
  return (
    <div className="bg-white w-full h-full">
      {/* HERO */}
      <section className="relative overflow-hidden" id="home">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-blue-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold mb-3" data-aos="fade-right" data-aos-duration="1500">
              Trusted Dental Clinic
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight" data-aos="fade-right" >
              A Better Life Starts <br />
              With a <span className="text-blue-600">Beautiful Smile</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg" data-aos="fade-right" data-aos-duration="1500">
              Modern dentistry with care, comfort, and precision. We help you
              smile confidently every day.
            </p>

            <div className="mt-8 flex gap-4" data-aos="fade-up" data-aos-duration="1200">
              <button className="px-7 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:shadow-xl hover:bg-blue-700 transition">
                Book Appointment
              </button>

              <button className="px-7 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                View Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + FLOATING CARD */}
          <div className="flex-1 mt-12 md:mt-0 relative flex justify-center" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
              alt="Dentist"
              className="w-[380px] md:w-[450px] rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-6 py-4 flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-500">Years</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-blue-600">5K+</p>
                <p className="text-sm text-gray-500">Patients</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-blue-600">4.9★</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
