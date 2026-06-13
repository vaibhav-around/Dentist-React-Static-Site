import ViewPortCounter from "../components/ViewPortCounter";

function About() {
  return (
    <section id="about" className="relative py-20 px-6 md:px-16 scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
            alt="Doctor"
            className="w-[320px] md:w-[400px] rounded-2xl shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">About Us</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Caring for Your Smile with Excellence
          </h2>

          <p className="mt-6 text-gray-600">
            Our clinic combines advanced dental technology with a gentle,
            patient-first approach. We believe every smile deserves the highest
            level of care and attention.
          </p>

          <p className="mt-4 text-gray-600">
            With years of experience and thousands of satisfied patients, we
            ensure safe, comfortable, and effective treatments.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                <ViewPortCounter target={10} />
              </p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                <ViewPortCounter  target={5000} duration={2000} />
              </p>
              <p className="text-sm text-gray-500">Happy Patients</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                <ViewPortCounter  target={4.9} duration={2500} />
              </p>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
