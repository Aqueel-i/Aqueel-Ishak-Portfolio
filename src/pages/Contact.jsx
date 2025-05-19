import React from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-10 text-lg">Feel free to reach out through the form below.</p>

        <form className="max-w-2xl mx-auto grid gap-6 bg-white shadow-lg rounded-2xl p-8">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all">
              <div className="flex items-center gap-1">
                <User size={16} /> Your Name
              </div>
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all">
              <div className="flex items-center gap-1">
                <Mail size={16} /> Your Email
              </div>
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            ></textarea>
            <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 transition-all">
              <div className="flex items-center gap-1">
                <MessageSquare size={16} /> Your Message
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
