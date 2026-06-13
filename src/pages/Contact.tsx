import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center py-10" id="contact">
       <h3 className="text-4xl text-blue-400 font-bold mr-12 mb-10">Book a appointment</h3>
      <div className=" w-[70%] py-8 border-2 rounded-3xl shadow-2xl border-blue-200 bg-blue-200   p-4 transition-all fade-in duration-200 " data-aos="fade-in">
      <form className="w-full mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border-0 outline-0 rounded-lg focus:border-0 focus:ring-2 focus:ring-blue-400 border-default-medium text-heading text-sm rounded-base  block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="day"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select Day
          </label>
          <select
            id="day"
            className="bg-neutral-secondary-medium border-0 outline-0 rounded-lg focus:border-0 focus:ring-2 focus:ring-blue-400 text-heading text-sm block w-full px-3 py-2.5 shadow-xs"
            required
          >
            <option value="">Choose a day...</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="time"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select Time (9 PM - 10 PM)
          </label>
          <select
            id="time"
            className="bg-neutral-secondary-medium border-0 outline-0 rounded-lg focus:border-0 focus:ring-2 focus:ring-blue-400 text-heading text-sm block w-full px-3 py-2.5 shadow-xs"
            required
          >
            <option value="">Choose a time...</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="9:15 PM">9:15 PM</option>
            <option value="9:30 PM">9:30 PM</option>
            <option value="9:45 PM">9:45 PM</option>
            <option value="10:00 PM">10:00 PM</option>
          </select>
        </div>
        <label htmlFor="remember" className="flex items-center mb-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border-0 outline-0 rounded-xs bg-neutral-secondary-medium "
            required
          />
          <p className="ms-2 text-sm font-medium text-heading select-none">
            I agree with the{" "}
            <a href="#" className="text-fg-brand hover:underline">
              terms and conditions
            </a>
            .
          </p>
        </label>
        <button
          type="submit"
          className="text-white bg-brand  border border-blue-200 hover:bg-blue-200 focus:ring-4 focus:ring-blue-400 rounded-lg    shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
