import React from "react";

function Contact() {
  return (
    <div className="  min-h-screen flex flex-col justify-center items-center ">
       
      <h1 className="text-4xl font-bold mb-8">Contact Me!</h1>
      <div className="shadow-md rounded-lg p-8 max-w-sm w-full">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
