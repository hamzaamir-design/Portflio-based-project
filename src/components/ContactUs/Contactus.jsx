import React from 'react';

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="mt-8 overflow-hidden rounded-xl shadow-lg border dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Get in Touch</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Fill in the form to start a conversation. We’d love to hear from you.
              </p>

              <ContactItem
                icon="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                label="Lahore, Pakistan"
              />
              <ContactItem
                icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                label="+92 322 4385445"
              />
              <ContactItem
                icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                label="hamzaamir9733@gmail.com"
              />
            </div>

            {/* Contact Form */}
            <form className="p-6 bg-white dark:bg-gray-900 space-y-6">
              <InputField id="name" type="text" placeholder="Full Name" />
              <InputField id="email" type="email" placeholder="Email" />
              <InputField id="phone" type="tel" placeholder="Phone Number" />
              <InputField id="message" type="textarea" placeholder="Your Message" />

              <button
                type="submit"
                className="w-full bg-orange-700 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ id, type, placeholder }) {
  const isTextarea = type === 'textarea';
  return (
    <div className="flex flex-col">
      {isTextarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={4}
          className="mt-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="mt-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      )}
    </div>
  );
}

// Reusable Contact Info Item
function ContactItem({ icon, label }) {
  return (
    <div className="flex items-center text-gray-600 dark:text-gray-300">
      <svg
        className="w-7 h-7 text-orange-600 dark:text-orange-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <span className="ml-4 font-medium">{label}</span>
    </div>
  );
}
